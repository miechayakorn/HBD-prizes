import { React, useEffect, useState } from 'react'
import { Button, Grid, Input, Link, Modal, Row, Text } from '@nextui-org/react'
import axios from 'axios'

const ModalCheckAccount = ({visible, setVisible}) => {
    const [username, setUsername] = useState(null)
    const [status, setStatus] = useState(null)

    useEffect(() => {
        setUsername(null)
        setStatus(null)
    }, [visible])
    const closeHandler = () => {
        setVisible(false)
    }

    const fetchAccountDetail = async () => {
        const {data} = await axios.get('/api/account/detail?username=' + username)
        if (data.result) {
            setStatus(data.result.is_active === 1 ? 'ส่งคำเชิญแล้ว' : 'รอส่งคำเชิญ')
        } else {
            setStatus('ไม่พบ username นี้ในระบบ')
        }
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
                    Account Status
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Grid xs={12} justify="center" css={{mt: '30px'}}>
                        <Input onChange={(e) => setUsername(e.target.value)}
                               onClearClick={() => setStatus(null)}
                               color="primary" clearable bordered
                               labelPlaceholder="Username"/>
                    </Grid>
                </Row>
                <Text b color={status && (status === 'ส่งคำเชิญแล้ว' ? 'success' : 'warning')}
                      size={'xs'}
                      justify="center">
                    สถานะ : {status}
                </Text>
                <Text size={14} justify="center">หากสถานะเป็นส่งคำเชิญแล้ว ให้กด
                    <Link target="_blank"
                          href="https://www.instagram.com/accounts/manage_access/">ที่นี่ Link</Link> {'>'} ไปที่ Tester
                    Invites {'>'} กดยอมรับ(Accept)</Text>
            </Modal.Body>
            <Modal.Footer css={{mt: '18px'}}>
                <Button auto
                        color={'secondary'}
                        onClick={() => setVisible(false)}
                >
                    Close
                </Button>
                <Button auto
                        disabled={!username}
                        color={'warning'}
                        shadow
                        onClick={() => fetchAccountDetail()}
                >
                    Check
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default ModalCheckAccount
