import { useEffect, useState } from 'react'
import { Avatar, Grid, Text, User } from '@nextui-org/react'
import NextLink from 'next/link'
import { decrypt } from '../lib/crypto'

const TopNav = () => {
    const [username, setUsername] = useState(null)
    const [uid, setUId] = useState(null)

    useEffect(() => {
        if (localStorage.getItem('uid')) {
            setUsername(localStorage.getItem('username'))
            setUId(decrypt(localStorage.getItem('uid')))
        }
    }, [])

    return (
        <div className="navbar">
            <Grid.Container gap={2} justify="space-between" css={{alignItems: 'center'}}>
                <NextLink href={'/'}>
                    <Grid>
                        <Text align="center" h6 size={15} color="black">
                            Mie Arcade
                        </Text>
                    </Grid>
                </NextLink>
                <NextLink href={username ? '/account' : '/login'}>
                    <Grid>
                        {
                            username ? <User
                                src="https://picsum.photos/150/150"
                                name={username}
                                description={'User id : ' + uid}
                            /> : <Avatar
                                squared
                                text="Login"/>
                        }
                    </Grid>
                </NextLink>
            </Grid.Container>
        </div>
    )
}

export default TopNav
