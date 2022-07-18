import React from 'react'
import { Button } from '@nextui-org/react'
import NextLink from 'next/link'

const Home = () => {

    return <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
        <iframe src="https://my.spline.design/untitled-3bb2f3f5166fc6ce53f356bf3a0eda92" width="100%" height="100%"/>
        <div style={{position: 'fixed', bottom: '40px', left: '50%'}}>
            <div style={{position: 'relative', left: '-50%'}}>
                <NextLink href={'/games'}>
                    <Button className="blob" rounded flat>Get Start!</Button>
                </NextLink>
            </div>
        </div>
    </div>
}

export default Home
