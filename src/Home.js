import React from 'react'
import { Card, Container, Grid, Row, Text } from '@nextui-org/react'

const Home = () => {

    return (
        <>
            <Row>
                <Grid.Container gap={2} justify="center">
                    <Grid xs={4}>
                        <Card color="primary">
                            <Text h6 size={15} color="white" css={{mt: 10}}>
                                1 of 3
                            </Text>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card color="primary">
                            <Text h6 size={15} color="white" css={{m: 0}}>
                                2 of 3
                            </Text>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card color="gradient">
                            <Text
                                css={{fontWeight: '$bold', color: '$white'}}
                                transform="capitalize"
                            >
                                test
                            </Text>
                            <Text css={{fontWeight: '$bold', color: '$white'}} span>
                                test
                            </Text>
                        </Card>
                    </Grid>
                </Grid.Container>
            </Row>
        </>
    )
}

export default Home
