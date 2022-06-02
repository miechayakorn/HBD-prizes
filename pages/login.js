import React, { useState } from 'react'
import { Button, Container, Grid, Image, Loading, Text } from '@nextui-org/react'
import { InstagramIcon } from '../components/InstagramIcon'

const Login = () => {
    const [isLoadingBtn, setIsLoadingBtn] = useState(false)

    return (
        <>
            <Container className="App bg-ig-dot" style={{marginTop: '-60px'}}>
                <Grid.Container gap={2}>
                    <Grid xs={12}>
                        <Text h3>Login with your Account</Text>
                    </Grid>
                    <Image
                        width={320}
                        height={180}
                        src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                        alt="Default Image"
                        objectFit="cover"
                    />
                    <Grid xs={12} justify="center">
                        <Button size="lg"
                                css={{mt: 50, width: '80%'}}
                                disabled={isLoadingBtn}
                                auto
                                shadow
                                color="error"
                                icon={isLoadingBtn ? <Loading type="spinner" color="currentColor" size="sm"/> :
                                    <InstagramIcon/>}
                                onClick={() => {
                                    setIsLoadingBtn(true)
                                    setTimeout(() => {
                                        window.location.href = 'https://www.instagram.com/oauth/authorize?client_id=1158691484675995&redirect_uri=https://arcade.miechayakorn.tk/auth&scope=user_profile&response_type=code'
                                    }, 2000)
                                }}>
                            Login with IG
                        </Button>
                    </Grid>
                </Grid.Container>
            </Container>
        </>
    )
}

export default Login
