import { Button, Grid, Table, Text } from '@nextui-org/react'
import styles from '../../styles/Home.module.css'
import Router from 'next/router'
import TopNav from '../../components/TopNav'
import React from 'react'

const Games = () => {
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
                            <Table.Column>SCORE</Table.Column>
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
                            <Table.Row key="6">
                                <Table.Cell>6</Table.Cell>
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Vacation</Table.Cell>
                            </Table.Row>
                            <Table.Row key="7">
                                <Table.Cell>7</Table.Cell>
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Vacation</Table.Cell>
                            </Table.Row>
                            <Table.Row key="8">
                                <Table.Cell>8</Table.Cell>
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Vacation</Table.Cell>
                            </Table.Row>
                            <Table.Row key="9">
                                <Table.Cell>9</Table.Cell>
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Vacation</Table.Cell>
                            </Table.Row>
                            <Table.Row key="10">
                                <Table.Cell>10</Table.Cell>
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Vacation</Table.Cell>
                            </Table.Row>
                            <Table.Row key="11">
                                <Table.Cell>11</Table.Cell>
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Vacation</Table.Cell>
                            </Table.Row>
                            <Table.Row key="12">
                                <Table.Cell>12</Table.Cell>
                                <Table.Cell>William Howard</Table.Cell>
                                <Table.Cell>Vacation</Table.Cell>
                            </Table.Row>
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
export default Games
