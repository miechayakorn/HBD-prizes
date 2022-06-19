import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Col, Grid, Link, Popover, Row, Table, Text } from '@nextui-org/react'
import ReactCardFlip from 'react-card-flip'
import copy from 'copy-to-clipboard'
import TopNav from '../components/TopNav'
import styles from '../styles/Home.module.css'
import { StyledBadge } from '../components/StyledBadge'

const Account = () => {
    const [username, setUsername] = useState(null)
    const [myRewards, setMyReward] = useState([])
    const [isFlipped, setIsFlipped] = useState(false)

    const fetchMyReward = async () => {
        const uid = localStorage.getItem('uid')
        const {data} = await axios.post('/api/account/reward', {uid})
        setMyReward(data)
    }

    useEffect(() => {
        fetchMyReward()
        setUsername(localStorage.getItem('username'))
    }, [])

    return (
        <>
            <TopNav/>
            <main className={styles.main}>
                <Grid xs={12} sm={5}>
                    <ReactCardFlip containerStyle={{width: '100%'}} isFlipped={isFlipped}
                                   flipDirection="horizontal">
                        {!isFlipped ? <Card cover css={{w: '100%'}}>
                            <Card.Header
                                blur css={{
                                position: 'absolute',
                                bgBlur: '#ffffff',
                                borderBottom: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                                zIndex: 1
                            }}>
                                <Col>
                                    <div className="waveTextAnimated">
                                        <Text size={12} weight="bold" transform="uppercase">
                                            New ({myRewards.length} items)
                                        </Text>
                                    </div>
                                    <Text h3 color="#7828c8">
                                        {username}
                                    </Text>
                                </Col>
                            </Card.Header>
                            <Card.Body>
                                <Card.Image
                                    src="/assets/img/bg-reward.webp"
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
                                            Enjoy your day! 🥳
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
                                                    onClick={() => setIsFlipped(true)}
                                                >
                                                    View
                                                </Text>
                                            </Button>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card> : <></>
                        }
                        <>
                            <Row>
                                <Col>
                                    <Text h3 css={{mb: 20}}>
                                        My Reward 🎁
                                    </Text>
                                </Col>
                            </Row>
                            <Row css={{pb: '20px'}}>
                                <Col>
                                    <Table
                                        color="warning"
                                        aria-label="Example table with static content"
                                        css={{
                                            height: 'auto',
                                            minWidth: '300px',
                                        }}
                                    >
                                        <Table.Header>
                                            <Table.Column>NAME</Table.Column>
                                            <Table.Column>ACTION</Table.Column>
                                        </Table.Header>
                                        <Table.Body>
                                            {
                                                myRewards.length === 0 ?
                                                    <Table.Row key="0">
                                                        <Table.Cell>NO DATA</Table.Cell>
                                                        <Table.Cell>
                                                            <StyledBadge type={'vacation'}>Close</StyledBadge>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    :
                                                    (myRewards.map((reward, index) => {
                                                        return <Table.Row key={index}>
                                                            <Table.Cell>{reward.name}</Table.Cell>
                                                            {reward.action === 'copy' ?
                                                                <Table.Cell>
                                                                    <Row>
                                                                        {reward.detail}
                                                                        <Popover>
                                                                            <Popover.Trigger>
                                                                                <Button css={{ml: '2px'}} size="xs" auto flat
                                                                                        onClick={() => {
                                                                                            copy(reward.detail)
                                                                                        }}>
                                                                                    <Text css={{color: 'inherit'}}
                                                                                          weight="bold">{reward.action}</Text>
                                                                                </Button>
                                                                            </Popover.Trigger>
                                                                            <Popover.Content>
                                                                                <Text size={12}
                                                                                      css={{p: '$4'}}>Copied!</Text>
                                                                            </Popover.Content>
                                                                        </Popover>
                                                                    </Row>
                                                                </Table.Cell>
                                                                :
                                                                <Table.Cell>
                                                                    <Link href={reward.detail} target="_blank">
                                                                        <StyledBadge
                                                                            type={'active'}>{reward.action}</StyledBadge>
                                                                    </Link>
                                                                </Table.Cell>
                                                            }
                                                        </Table.Row>
                                                    }))
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
                                </Col>
                            </Row>
                            <Row css={{py: '20px'}}>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button flat auto rounded color="warning">
                                            <Text
                                                css={{color: 'inherit'}}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                                onClick={() => setIsFlipped(false)}
                                            >
                                                Back To Account
                                            </Text>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </>
                    </ReactCardFlip>
                </Grid>
            </main>
        </>
    )

}

export default Account
