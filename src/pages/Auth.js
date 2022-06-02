import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Container, Grid, Loading, Text } from '@nextui-org/react'

const Auth = () => {
    const query = new URLSearchParams(useLocation().search)
    const code = query.get('code')

    useEffect(() => {
        if (code) {
            fetchData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchData = async () => {
        const tokenData = await getToken()
        await getIGProfile(tokenData)
    }

    const getToken = async () => {
        let bodyFormData = new FormData()
        bodyFormData.append('client_id', '1158691484675995')
        bodyFormData.append('client_secret', '5bc08d49b174ce362cc352d0eb16d461')
        bodyFormData.append('grant_type', 'authorization_code')
        bodyFormData.append('code', code)
        bodyFormData.append('redirect_uri', 'https://arcade.miechayakorn.tk/auth')
        const {data} = await axios.post('https://api.instagram.com/oauth/access_token', bodyFormData, {headers: {'Content-Type': 'multipart/form-data'}})
        return data
    }

    const getIGProfile = async (tokenData) => {
        const {data} = await axios.get('https://graph.instagram.com/' + tokenData.user_id + '?fields=id,username&access_token=' + tokenData.access_token)
        localStorage.setItem('auth', tokenData.access_token)
        localStorage.setItem('username', data.username)
    }

    return (
        <Container className="App bg-ig-dot" style={{marginTop: '-60px'}}>
            <Grid.Container gap={2}>
                <Grid xs={12} justify="center">
                    <Text h3>Welcome, {localStorage.getItem('username')}</Text>
                </Grid>
                <Grid xs={12} justify="center">
                    <Loading color="error" size="lg"/>
                </Grid>
            </Grid.Container>
        </Container>
    )
}

export default Auth
