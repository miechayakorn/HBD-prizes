import React, { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Button } from '@nextui-org/react'

const Congrat = () => {

    useEffect(() => {
        setTimeout(() => {
            playSound()
        }, 5000)
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {y: 0.6}
        })
    }, [])

    const playSound = () => {
    }

    return <Button onClick={() => playSound()}>test</Button>
}

export default Congrat
