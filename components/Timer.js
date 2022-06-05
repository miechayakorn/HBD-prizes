import React, { useEffect } from 'react'

const Timer = ({start, time, setTime}) => {

    useEffect(() => {
        let interval = null
        if (start) {
            interval = setInterval(() => {
                setTime((prevState) => prevState + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [start])

    return (
        <>
            <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
            <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
            <span>{('0' + (time / 10) % 1000).slice(-2)}</span>
        </>
    )
}

export default Timer
