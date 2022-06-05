import React from 'react'
import { Button, Modal, Row, Text } from '@nextui-org/react'
import Router from 'next/router'

const ModalNewRound = ({visible, setVisible, round, roundLength, time, startTimer}) => {

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
                    Congratulations
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Row justify="space-between">
                    <Text size={16}>You passed {round !== roundLength ? round - 1 : round} of {roundLength} levels
                        😀</Text>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                {round !== roundLength ?
                    <Button auto
                            color={'warning'}
                            shadow
                            onClick={() => {
                                closeHandler()
                                startTimer()
                            }}>
                        Next Level
                    </Button> :
                    <Button auto
                            color={'success'}
                            shadow
                            onClick={() =>
                                Router.push({
                                    pathname: '/congrat',
                                    query: {time}
                                })
                            }>
                        View Score
                    </Button>
                }
            </Modal.Footer>
        </Modal>
    )
}

export default ModalNewRound
