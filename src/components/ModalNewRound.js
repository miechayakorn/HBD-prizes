import React from 'react'
import { Button, Modal, Row, Text } from '@nextui-org/react'

const ModalNewRound = ({visible, setVisible}) => {

    const closeHandler = () => {
        setVisible(false)
    }

    return (
        <Modal
            width={'80%'}
            blur
            aria-labelledby="modal-title"
            open={visible}
            preventClose
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text h3 id="modal-title" >
                    Congratulations 🎉
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Row justify="space-between">
                    <Text size={14}></Text>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button auto onClick={closeHandler}>
                    Next Level
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default ModalNewRound
