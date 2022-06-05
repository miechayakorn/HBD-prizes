import React, { useEffect, useState } from 'react'
import { Button, Modal, Text } from '@nextui-org/react'
import Router from 'next/router'

const ModalGetStart = ({visible, setVisible, startTimer}) => {
    const [isLogged, setIsLogged] = useState(null)

    useEffect(() => {
        setIsLogged(localStorage.getItem('uid'))
    }, [])

    const closeHandler = () => {
        setVisible(false)
    }

    return (
        <Modal
            style={{margin: '20px'}}
            aria-labelledby="modal-title"
            open={visible}
            preventClose
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text h3 id="modal-title">
                    Getting started
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Text size={16}>The game has a total of 5 levels, you have to complete the time as quickly as
                    possible 😎</Text>
                {!isLogged && <Text color={'error'}>
                    You are not logged in will make the system unable to save the score
                </Text>}
            </Modal.Body>
            <Modal.Footer>
                {!isLogged && <Button color={'error'} shadow auto onClick={() => Router.push('/login')}>
                    Login
                </Button>}
                <Button color={'warning'} shadow auto onClick={() => {
                    startTimer()
                    closeHandler()
                }}>
                    GO !
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalGetStart
