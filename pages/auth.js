import { useEffect, useState } from 'react'
import { Container, Grid, Loading, Text } from '@nextui-org/react'
import Router from 'next/router'
import FormData from 'form-data'
import axios from 'axios'
import { encrypt } from '../lib/crypto'

const Auth = ({profile, igToken}) => {
    const [minHeight, setMinHeight] = useState('800px')

    useEffect(() => {
        setMinHeight(window.innerHeight)
        if (profile && profile.username) {
            fetchAccountDetail()
        } else {
            Router.push('/')
        }
    }, [])

    const fetchAccountDetail = async () => {
        const {data} = await axios.get('/api/account/detail?username=' + profile.username)
        localStorage.setItem('uid', encrypt(data.id))
        localStorage.setItem('auth', igToken)
        localStorage.setItem('username', profile.username)
        setTimeout(() => {
            Router.push('/')
        }, 2000)
    }

    return (
        <Container className="App bg-ig-dot" style={{minHeight}}>
            <Grid.Container gap={2}>
                <Grid xs={12} justify="center">
                    <Text h3>Welcome, {profile?.username}</Text>
                </Grid>
                <Grid xs={12} justify="center">
                    <Loading color="error" size="lg"/>
                </Grid>
            </Grid.Container>
        </Container>
    )
}

export const getServerSideProps = async ({query}) => {
    const {code} = query
    let profile = null
    let igToken = null
    if (code) {
        let bodyFormData = new FormData()
        bodyFormData.append('client_id', process.env.client_id)
        bodyFormData.append('client_secret', process.env.client_secret)
        bodyFormData.append('grant_type', 'authorization_code')
        bodyFormData.append('code', code)
        bodyFormData.append('redirect_uri', 'https://arcade.miechayakorn.tk/auth')

        const AuthRes = await fetch('https://api.instagram.com/oauth/access_token', {
            method: 'post',
            body: bodyFormData,
        })
        if (AuthRes.status === 200) {
            const auth = await AuthRes.json()
            const accessToken = auth.access_token
            const userId = auth.user_id
            const profileRes = await fetch('https://graph.instagram.com/' + userId + '?fields=id,username&access_token=' + accessToken, {
                method: 'get'
            })
            if (profileRes.status === 200) {
                profile = await profileRes.json()
                igToken = accessToken
            }
        }
    }

    return {
        props: {
            profile,
            igToken
        },
    }
}

export default Auth
