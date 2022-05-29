import React from 'react'
import { Button } from '@nextui-org/react'

const Login = () => {
    return <Button onClick={()=>localStorage.setItem('auth', 'test')}>Login</Button>
}

export default Login
