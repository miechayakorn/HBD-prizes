import React, { useState } from 'react'
import { Button, Container, Grid, Image, Loading, Text } from '@nextui-org/react'
import { InstagramIcon } from '../components/InstagramIcon'

const Login = () => {
    const [isLoadingBtn, setIsLoadingBtn] = useState(false)

    return (
        <>
            <Container className={'bg-dot'}>
                <Grid.Container gap={2} css={{mt: 10}}>
                    <Grid>
                        <Text h3>Login with your Account</Text>
                    </Grid>
                    {/*<Grid>*/}
                    {/*    <Text*/}
                    {/*        h1*/}
                    {/*        size={60}*/}
                    {/*        css={{*/}
                    {/*            textGradient: '45deg, $blue600 -20%, $pink600 50%',*/}
                    {/*        }}*/}
                    {/*        weight="bold"*/}
                    {/*    >*/}
                    {/*        Let's*/}
                    {/*    </Text>*/}
                    {/*    <Text*/}
                    {/*        h1*/}
                    {/*        size={60}*/}
                    {/*        css={{*/}
                    {/*            textGradient: '45deg, $purple600 -20%, $pink600 100%',*/}
                    {/*        }}*/}
                    {/*        weight="bold"*/}
                    {/*    >*/}
                    {/*        Make the Web*/}
                    {/*    </Text>*/}
                    {/*    <Text*/}
                    {/*        h1*/}
                    {/*        size={60}*/}
                    {/*        css={{*/}
                    {/*            textGradient: '45deg, $yellow600 -20%, $red600 100%',*/}
                    {/*        }}*/}
                    {/*        weight="bold"*/}
                    {/*    >*/}
                    {/*        Prettier*/}
                    {/*    </Text>*/}
                    {/*</Grid>*/}
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
