import React, { useEffect, useState } from 'react'
import { Card, Container, Grid, Text } from '@nextui-org/react'
import { getCardData, shuffle } from '../utils/helper'
import ReactCardFlip from 'react-card-flip'
import ModalNewRound from '../components/ModalNewRound'
import useSound from 'use-sound'
import confetti from 'canvas-confetti'

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

const Games = () => {
    const [flippedCards, setFlippedCards] = useState([])
    const [round, setRound] = useState(1)
    const [cardList, setCardList] = useState([])
    const [isModalNextRound, setIsModalNextRound] = useState(false)
    const [playOn] = useSound('/assets/sound/pop-up-on.mp3')
    const [playOff] = useSound('/assets/sound/pop-up-off.mp3')
    const [playCorrect] = useSound('/assets/sound/correct-answer.mp3')
    const [playCongrat] = useSound('/assets/sound/congrat.mp3')

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

    const isGameOver = () => {
        let done = true
        cardList.forEach(card => {
            if (!card.matched) done = false
        })
        if (done) {
            const newRound = round + 1
            const isNotGameEnd = newRound !== roundData.length + 1
            if (isNotGameEnd) {
                setRound(newRound)
                setFlippedCards([])
                setIsModalNextRound(true)
                setTimeout(() => {
                    playCorrect()
                }, 300)
            } else {
                playCongrat()
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: {y: 0.6}
                })
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
        <Container className="App bg-dot">
            <Grid.Container gap={2} justify="center">
                <Grid xs={4}>
                    <Card color="gradient">
                        <Text align="center" h6 size={15} color="white">
                            {round} of {roundData.length}
                        </Text>
                    </Card>
                </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
                {cardList.map((item, index) => (
                    <Grid xs={roundData[round - 1].gridSize} lg={roundData[round - 1].gridSize} key={index}>
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
            <ModalNewRound round={round} roundLength={roundData.length} visible={isModalNextRound}
                           setVisible={setIsModalNextRound}/>
        </Container>
    )
}

export default Games
