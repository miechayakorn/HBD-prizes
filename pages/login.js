import React, { useEffect, useState } from 'react'
import { Button, Container, Grid, Loading, Row, Text } from '@nextui-org/react'
import { InstagramIcon } from '../components/InstagramIcon'
import ModalCheckAccount from '../components/ModalCheckAccount'
import Router from 'next/router'

const Login = () => {
    const [isLoadingBtn, setIsLoadingBtn] = useState(false)
    const [minHeight, setMinHeight] = useState('800px')
    const [isModal, setIsModal] = useState(false)

    useEffect(() => {
        setMinHeight(window.innerHeight)
    }, [])
    return (
        <>
            <Container className="App bg-ig-dot" style={{minHeight}}>
                <Grid.Container gap={2}>
                    <Grid xs={12} justify="center">
                        <Text h1 size={50} css={{
                            textGradient: '45deg, $yellow600 -20%, $red600 100%'
                        }}>
                            Login
                        </Text>
                    </Grid>
                    <Row justify="center" css={{mb: '20px'}}>
                        <Button color={'gradient'} size="sm" onClick={() => Router.push('/register')}>Register</Button>
                    </Row>
                    <Row>
                        <Text>** ต้องทำการเพิ่มแอป Mie Arcade ก่อนกด Login ตรวจสอบสถานะคำเชิญ
                            <Button size="xs" onClick={() => setIsModal(true)}>โดยกดที่นี่</Button>
                        </Text>
                    </Row>
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
                <ModalCheckAccount visible={isModal} setVisible={setIsModal}/>
            </Container>
        </>
    )
}

export default Login
