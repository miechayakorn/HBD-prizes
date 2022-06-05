import { React } from 'react'
import { Button, Image, Modal, Row, Text } from '@nextui-org/react'
import Router from 'next/router'

const ModalSuccess = ({visible, setVisible}) => {

    const closeHandler = () => {
        setVisible(false)
    }

    return (
        <Modal
            style={{margin: '40px'}}
            aria-labelledby="modal-title"
            open={visible}
            preventClose
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text h3 id="modal-title">
                    Success
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Image
                        src="/assets/img/check.svg"
                        alt="Default Image"
                        objectFit="cover"
                    />
                </Row>
                <Text justify="center">โปรดทำการตรวจสอบสถานะ Account ได้ที่หน้า Login</Text>
            </Modal.Body>
            <Modal.Footer>
                <Button auto
                        color={'success'}
                        shadow
                        onClick={() =>
                            Router.push('/login')
                        }>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default ModalSuccess
