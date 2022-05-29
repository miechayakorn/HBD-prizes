import React from 'react'
import { Button, Modal, Row, Text } from '@nextui-org/react'
import { useHistory } from 'react-router-dom'

const ModalNewRound = ({visible, setVisible, round, roundLength}) => {
    const history = useHistory()

    const closeHandler = () => {
        setVisible(false)
    }

    return (
        <Modal
            width={'80%'}
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
                    <Text size={16}>You passed {round - 1} of {roundLength} levels 😀</Text>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                {round !== roundLength + 1 ? <Button auto onClick={closeHandler}>
                    Next Level
                </Button> : <Button auto onClick={() => history.push('/congrat')}>
                    View Prize
                </Button>}
            </Modal.Footer>
        </Modal>
    )

}

export default ModalNewRound
