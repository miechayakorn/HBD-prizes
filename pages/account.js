import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import styles from '../styles/Home.module.css'
import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react'

const Account = () => {
    const [username, setUsername] = useState(null)

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
    }, [])

    return (
        <>
            <TopNav/>
            <main className={styles.main}>
                <Grid xs={12} sm={5}>
                    <Card cover css={{w: '100%'}}>
                        <Card.Header css={{position: 'absolute', zIndex: 1, top: 5}}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    New (1 items)
                                </Text>
                                <Text h3 color="black">
                                    {username}
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body>
                            <Card.Image
                                src="https://nextui.org/images/card-example-6.jpeg"
                                height={400}
                                width="100%"
                                alt="Card example background"
                            />
                        </Card.Body>
                        <Card.Footer
                            blur
                            css={{
                                position: 'absolute',
                                bgBlur: '#ffffff',
                                borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row>
                                <Col>
                                    <Text color="#000" size={12}>
                                        See your rewards
                                    </Text>
                                    <Text color="#000" size={12}>
                                        Click the button
                                    </Text>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button flat auto rounded color="secondary">
                                            <Text
                                                css={{color: 'inherit'}}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                View Prize
                                            </Text>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>
            </main>
        </>
    )

}

export default Account
