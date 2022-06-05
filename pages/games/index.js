import React from 'react'
import Router from 'next/router'
import { Button, Grid, Table, Text } from '@nextui-org/react'
import styles from '../../styles/Home.module.css'
import TopNav from '../../components/TopNav'
import { millisToMinutesAndSeconds } from '../../utils/helper'

const Games = ({leader}) => {
    return (
        <>
            <TopNav/>
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

                <Text h2 color="#ff4ecd" className="text-banner-y" css={{m: 20}}>
                    Leaderboard 🚀
                </Text>
                <Grid xs={12}>
                    <Table
                        color="secondary"
                        aria-label="Leaderboard"
                        css={{
                            height: 'auto',
                            minWidth: '300px',
                        }}
                    >
                        <Table.Header>
                            <Table.Column>No.</Table.Column>
                            <Table.Column>NAME</Table.Column>
                            <Table.Column>TIME</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {
                                leader && leader.result.map((data, index) => {
                                    return <Table.Row key={index}>
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{data.username}</Table.Cell>
                                        <Table.Cell>{millisToMinutesAndSeconds(data.time_spent)}</Table.Cell>
                                    </Table.Row>
                                })
                            }
                        </Table.Body>
                        <Table.Pagination
                            shadow
                            noMargin
                            align="center"
                            rowsPerPage={3}
                            onPageChange={(page) => console.log({page})}
                        />
                    </Table>
                </Grid>
            </main>
        </>
    )
}

export const getServerSideProps = async () => {
    let leader = null
    const leaderRes = await fetch(`${process.env.DOMAIN}/api/leaderboard`, {
        method: 'get'
    })
    if (leaderRes.status === 200) {
        leader = await leaderRes.json()
    }

    return {
        props: {
            leader
        },
    }
}

export default Games
