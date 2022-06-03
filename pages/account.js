import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Grid, Row, Table, Text } from '@nextui-org/react'
import ReactCardFlip from 'react-card-flip'
import TopNav from '../components/TopNav'
import styles from '../styles/Home.module.css'
import { StyledBadge } from '../components/StyledBadge'

const Account = () => {
    const [username, setUsername] = useState(null)
    const [isFlipped, setIsFlipped] = useState(false)

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
    }, [])

    return (
        <>
            <TopNav/>
            <main className={styles.main}>
                <Grid xs={12} sm={5}>
                    <ReactCardFlip containerStyle={{width: '100%'}} isFlipped={isFlipped}
                                   flipDirection="vertical">
                        <Card cover css={{w: '100%'}}>
                            <Card.Header css={{position: 'absolute', zIndex: 1, top: 5}}>
                                <Col>
                                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                        New (0 items)
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
                        </Card>
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
                                            <Table.Row key="0">
                                                <Table.Cell>NO DATA</Table.Cell>
                                                <Table.Cell>
                                                    <StyledBadge type={'vacation'}>Close</StyledBadge>
                                                </Table.Cell>
                                            </Table.Row>
                                            {/*<Table.Row key="1">*/}
                                            {/*    <Table.Cell>MOBILE TOPUP 20BAHT</Table.Cell>*/}
                                            {/*    <Table.Cell>*/}
                                            {/*        <StyledBadge type={'active'}>Click Link</StyledBadge>*/}
                                            {/*    </Table.Cell>*/}
                                            {/*</Table.Row>*/}
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
