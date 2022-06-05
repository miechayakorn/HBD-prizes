import React, { useState } from 'react'
import { Button, Checkbox, Container, Grid, Input, Row, Text } from '@nextui-org/react'
import TopNav from '../components/TopNav'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import ModalSuccess from '../components/ModalSuccess'

const Register = () => {
    const [username, setUsername] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [isModal, setIsModal] = useState(false)

    const onSubmit = async () => {
        try {
            const {data} = await axios.post('/api/account/register', {username})
            setIsModal(true)
        } catch (e) {
            alert(e.response?.data?.error || 'พบข้อผิดพลาด')
        }
    }

    return (
        <>
            <TopNav/>
            <main className={styles.main}>
                <Text h1 size={40} css={{
                    textGradient: '45deg, $yellow600 -20%, $red600 100%',
                    mb: '5px'
                }}>
                    Register
                </Text>
                <Text h1 size={15}>
                    ใช้ username ของ instagram ในการสมัครเท่านั้น!!
                </Text>
                <Grid xs={12} justify="center" css={{mt: 40}}>
                    <Input onChange={(e) => setUsername(e.target.value)} color="primary" clearable bordered
                           labelPlaceholder="Username"/>
                </Grid>
                <Container>
                    <Row xs={12} css={{mt: 10}}>
                        <Checkbox size="xs" onChange={(value) => setIsChecked(value)}>
                            เนื่องจากแอปยังไม่ได้รับ Approve จาก Facebook หลังจากทำการสมัครสมาชิก
                            โปรดรอให้ระบบส่งคำเชิญ Tester Invites สักครู่.. สามารถตรวจสอบรายละเอียดเพิ่มเติมได้ที่หน้า
                            Login
                        </Checkbox>
                    </Row>
                </Container>
                <Grid.Container gap={2} justify="center" css={{mt: '20px'}}>
                    <Grid>
                        <Button disabled={!isChecked || !username} shadow size={'lg'}
                                onClick={onSubmit}>
                            สมัครสมาชิก
                        </Button>
                    </Grid>
                </Grid.Container>
            </main>
            <ModalSuccess visible={isModal} setVisible={setIsModal}/>
        </>
    )
}

export default Register
