import { useEffect, useState } from 'react'
import { Avatar, Button, Grid, Table, Text, User } from '@nextui-org/react'
import styles from '../../styles/Home.module.css'
import Router from 'next/router'
import NextLink from 'next/link'

const Games = () => {
    const [username, setUsername] = useState(null)

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
    }, [])

    return (
        <>
            <div className="navbar">
                <Grid.Container gap={2} justify="space-between" css={{alignItems: 'center'}}>
                    <NextLink href={'/'}>
                        <Grid>
                            <Text align="center" h6 size={15} color="black">
                                Mie Arcade
                            </Text>
                        </Grid>
                    </NextLink>
                    <NextLink href={username ? '/account' : '/login'}>
                        <Grid>
                            {
                                username ? <User
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    name="Ariana Wattson"
                                    description="UI/UX Designer @Github"
                                /> : <Avatar
                                    squared
                                    text="Login"/>
                            }
                        </Grid>
                    </NextLink>
                </Grid.Container>
            </div>
            <main className={styles.main}>
                <Text h1 size={40} css={{
                    textGradient: '45deg, $yellow600 -20%, $red600 100%',
                }}>
                    Welcome to
                </Text>
                <Text h2 weight={'black'}>Mie Arcade</Text>

                <div className={styles.description}>
                    <Grid>
                        <Button color="warning" onClick={() => Router.push('/games/flipcard')}>Flip Card</Button>
                        <Text css={{pt: '5px'}}>Tap To Play!</Text>
                    </Grid>
                </div>

                <Text h2 color="#ff4ecd" css={{my: 5}}>
                    Leaderboard 🚀
                </Text>
                <Grid xs={12}>
                    <Table
                        aria-label="Leaderboard"
                        css={{
                            height: 'auto',
                            minWidth: '300px',
                        }}
                    >
                        <Table.Header>
                            <Table.Column>No</Table.Column>
                            <Table.Column>NAME</Table.Column>
                            <Table.Column>Score</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row key="1">
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>Tony Reichert</Table.Cell>
                                <Table.Cell>Active</Table.Cell>
                            </Table.Row>
                            <Table.Row key="2">
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>Zoey Lang</Table.Cell>
                                <Table.Cell>Paused</Table.Cell>
                            </Table.Row>
                            <Table.Row key="3">
                                <Table.Cell>3</Table.Cell>
                                <Table.Cell>Jane Fisher</Table.Cell>
                                <Table.Cell>Active</Table.Cell>
                            </Table.Row>
                            <Table.Row key="4">
                                <Table.Cell>4</Table.Cell>
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Vacation</Table.Cell>
                            </Table.Row>
                            <Table.Row key="5">
                                <Table.Cell>5</Table.Cell>
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Vacation</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Grid>
            </main>
        </>

    )
}
export default Games
