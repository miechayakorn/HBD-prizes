import React, { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import Router, { useRouter } from 'next/router'
import { Button, Grid, Text } from '@nextui-org/react'
import { millisToMinutesAndSeconds } from '../utils/helper'
import TopNav from '../components/TopNav'
import styles from '../styles/Home.module.css'

const Congrat = () => {
    const router = useRouter()
    const [username, setUsername] = useState(null)

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {y: 0.6}
        })
    }, [])


    return (
        <>
            <TopNav/>
            {router.query.time && <main className={styles.main}>
                <Text h1 size={40} css={{
                    textGradient: '45deg, $yellow600 -20%, $red600 100%',
                }}>
                    Congrats !
                </Text>
                <Grid xs={12} justify="center" css={{mt: 6}}>
                    <Text h3 weight={'black'}>TIME : {millisToMinutesAndSeconds(router.query.time)}</Text>
                </Grid>
                <Grid.Container gap={2} justify="center" css={{mt: '20px'}}>
                    <Grid>
                        <Button shadow color="warning" auto onClick={() => Router.push('/games')}>
                            Back To Home
                        </Button>
                    </Grid>
                    {username && <Grid>
                        <Button shadow color="error" auto onClick={() => Router.push('/account')}>
                            My Account
                        </Button>
                    </Grid>}
                </Grid.Container>
            </main>}
        </>
    )
}

export default Congrat
