import React from 'react'
import { Button } from '@nextui-org/react'

const Login = () => {
    return <Button onClick={()=> window.location.href = 'https://www.instagram.com/oauth/authorize?client_id=1158691484675995&redirect_uri=https://arcade.miechayakorn.tk/auth&scope=user_profile&response_type=code'}>Login</Button>
}

export default Login
