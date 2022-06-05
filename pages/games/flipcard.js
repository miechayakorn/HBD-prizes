import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Container, Grid, Text } from '@nextui-org/react'
import { getCardData, shuffle } from '../../utils/helper'
import ReactCardFlip from 'react-card-flip'
import ModalNewRound from '../../components/ModalNewRound'
import useSound from 'use-sound'
import ModalGetStart from '../../components/ModalGetStart'
import Timer from '../../components/Timer'
import { decrypt, encrypt } from '../../lib/crypto'

const cards = [
    // {
    //     name: 'Orange',
    //     img: '/fruit-1.jpg',
    // },
    {
        name: 'Tangerine',
        img: '/fruit-2.jpg',
    },
    {
        name: 'Raspberry',
        img: '/fruit-3.jpg',
    },
    {
        name: 'Lemon',
        img: '/fruit-4.jpg',
    },
    {
        name: 'Advocato',
        img: '/fruit-5.jpg',
    },
    {
        name: 'Lemon 2',
        img: '/fruit-6.jpg',
    },
    {
        name: 'Banana',
        img: '/fruit-7.jpg',
    },
    {
        name: 'Watermelon',
        img: '/fruit-8.jpg',
    },
]

const roundData = [
    {gridSize: 6, imgSize: 2},
    {gridSize: 6, imgSize: 3},
    {gridSize: 4, imgSize: 4},
    {gridSize: 4, imgSize: 5},
    {gridSize: 4, imgSize: 6}
]

const Flipcard = () => {
    const [flippedCards, setFlippedCards] = useState([])
    const [round, setRound] = useState(1)
    const [cardList, setCardList] = useState([])
    const [isModalGetStart, setIsModalGetStart] = useState(true)
    const [isModalNextRound, setIsModalNextRound] = useState(false)
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)
    const [gameCode, setGameCode] = useState('')

    const [playOn] = useSound('/assets/sound/pop-up-on.mp3')
    const [playOff] = useSound('/assets/sound/pop-up-off.mp3')
    const [playCorrect] = useSound('/assets/sound/correct-answer.mp3')
    const [playCongrat] = useSound('/assets/sound/congrat.mp3')

    const startTimer = () => {
        setStart(true)
    }

    const stopTimer = () => {
        setStart(false)
    }

    const handleClick = (name, index) => {
        playOn()
        let currentCard = {name, index}

        //update card is flipped
        let updateCards = cardList.map(card => {
            if (card.id === index) {
                card.flipped = true
            }
            return card
        })
        let updateFlipped = flippedCards
        updateFlipped.push(currentCard)
        setFlippedCards(updateFlipped)
        setCardList(updateCards)

        //if 2 cards are flipped, check if they are a match
        if (flippedCards.length === 2) {
            setTimeout(() => {
                check()
            }, 600)
        }
    }

    const check = () => {
        let updateCards = cardList
        if (
            flippedCards[0].name === flippedCards[1].name &&
            flippedCards[0].index !== flippedCards[1].index
        ) {
            updateCards[flippedCards[0].index].matched = true
            updateCards[flippedCards[1].index].matched = true
            isGameOver()
        } else {
            updateCards[flippedCards[0].index].flipped = false
            updateCards[flippedCards[1].index].flipped = false
        }
        setCardList(updateCards)
        setFlippedCards([])
    }

    const fetchTacking = async (round) => {
        if (round === 1) {
            const id = encrypt(
                JSON.stringify({
                    userId: decrypt(localStorage.getItem('uid')),
                    timeSpent: time
                })
            )
            const {data} = await axios.post('/api/tracking', {id})
            setGameCode(data.gameCode)
            return data
        } else {
            const id = encrypt(
                JSON.stringify({
                    userId: decrypt(localStorage.getItem('uid')),
                    gameCode,
                    round,
                    timeSpent: time
                })
            )
            const {data} = await axios.put('/api/tracking', {id})
            return data
        }
    }

    const isGameOver = async () => {
        let done = true
        cardList.forEach(card => {
            if (!card.matched) done = false
        })
        if (done) {
            stopTimer()
            const newRound = round + 1
            const isNotGameEnd = newRound !== roundData.length + 1
            setRound(newRound)
            setIsModalNextRound(true)
            if (localStorage.getItem('uid')) {
                await fetchTacking(newRound - 1)
            }
            if (isNotGameEnd) {
                setFlippedCards([])
                playCorrect()
            } else {
                playCongrat()
            }
        } else {
            playOff()
        }
    }

    useEffect(() => {
        if (round !== roundData.length + 1) {
            setCardList(shuffle(getCardData(cards, roundData[round - 1].imgSize)).map((card, index) => {
                return {
                    id: index,
                    ...card,
                    flipped: false,
                    matched: false
                }
            }))
        }
    }, [round])

    return (
        <>
            <div className="navbar">
                <Grid.Container gap={2} justify="space-between" css={{alignItems: 'center'}}>
                    <Grid>
                        <Card color="gradient">
                            <Text align="center" h6 size={15} color="white">
                                {round} of {roundData.length}
                            </Text>
                        </Card>
                    </Grid>
                    <Grid>
                        <Text align="center" h6 size={15} color="black">
                            time : <Timer start={start} time={time} setTime={setTime}/>
                        </Text>
                    </Grid>
                </Grid.Container>
            </div>
            <div className="main">
                <Container>
                    <Grid.Container gap={2}>
                        {(round <= roundData.length) && cardList.map((item, index) => (
                            <Grid xs={roundData[round - 1]?.gridSize} lg={roundData[round - 1]?.gridSize} key={index}>
                                <ReactCardFlip containerStyle={{width: '100%'}} isFlipped={item.flipped}
                                               flipDirection="horizontal">
                                    <Card clickable
                                          onClick={() => flippedCards.length === 2 ? () => {
                                          } : handleClick(item.name, index)}
                                    >
                                        <Card.Body css={{p: 0}}>
                                            <Card.Image
                                                objectFit="cover"
                                                src={'/assets/img/boxPrize.png'}
                                                width="100%"
                                                height={140}
                                                alt="box-prize"
                                            />
                                        </Card.Body>
                                    </Card>
                                    <Card clickable>
                                        <Card.Body css={{p: 0}}>
                                            <Card.Image
                                                objectFit="cover"
                                                src={'/assets/img' + item.img}
                                                width="100%"
                                                height={140}
                                                alt={item.name}
                                            />
                                        </Card.Body>
                                    </Card>
                                </ReactCardFlip>
                            </Grid>
                        ))}
                    </Grid.Container>
                    <ModalGetStart visible={isModalGetStart} setVisible={setIsModalGetStart} startTimer={startTimer}/>
                    <ModalNewRound round={round} roundLength={roundData.length} visible={isModalNextRound}
                                   setVisible={setIsModalNextRound} time={time} startTimer={startTimer}/>
                </Container>
            </div>
        </>
    )
}

export default Flipcard
