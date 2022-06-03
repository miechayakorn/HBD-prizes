import React from 'react'
import { Button, Container, Grid, Row } from '@nextui-org/react'
import NextLink from 'next/link'

const Home = () => {

    return (
        <Container>
            <Row css={{p: 10}}>
                Welcome my first nextUI by miechayakorn
            </Row>
            <Row>
                <Grid xs={4}>
                    <NextLink href={'/games'}>
                        <Button>Go to Games</Button>
                    </NextLink>
                </Grid>
            </Row>
        </Container>
    )
}

export default Home
