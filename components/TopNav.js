import { useEffect, useState } from 'react'
import { Avatar, Grid, Text, User } from '@nextui-org/react'
import NextLink from 'next/link'

const TopNav = () => {
    const [username, setUsername] = useState(null)
    const [uid, setUId] = useState(null)

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
        setUId(localStorage.getItem('uid'))
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
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                name={username}
                                description={'User id : '+uid}
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
