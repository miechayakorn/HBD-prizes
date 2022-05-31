import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Auth = () => {
    const query = new URLSearchParams(useLocation().search)
    const code = query.get('code')

    useEffect(() => {
        if (code) {
            fetchData()
        }
    }, [])

    const fetchData = async () => {
        const tokenData = await getToken()
        await getIGProfile(tokenData)
    }

    const getToken = async () => {
        const {data} = await axios.post('https://api.instagram.com/oauth/access_token', {
            client_id: '1158691484675995',
            client_secret: '5bc08d49b174ce362cc352d0eb16d461',
            grant_type: 'authorization_code',
            code,
            redirect_uri: 'https://arcade.miechayakorn.tk'
        })
        return data
    }

    const getIGProfile = async (tokenData) => {
        const {data} = await axios.get('https://graph.instagram.com/' + tokenData.user_id + '?fields=id,username&access_token=' + tokenData.access_token)
        localStorage.setItem('auth', tokenData.access_token)
        localStorage.setItem('username', data.username)
    }

    return (
        <div className="text-center">
            Welcome <p>{localStorage.getItem('username')}</p>
        </div>
    )
}

export default Auth
