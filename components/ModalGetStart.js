import React from 'react'
import { Button, Modal, Row, Text } from '@nextui-org/react'

const ModalGetStart = ({visible, setVisible, startTimer}) => {

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
                <Row justify="space-between">
                    <Text size={16}>The game has a total of 5 levels, you have to complete the time as quickly as
                        possible 😎</Text>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button auto onClick={() => {
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
