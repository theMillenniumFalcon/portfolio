import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

interface Custom404Props { }

const Custom404: React.FC<Custom404Props> = ({ }) => {
    return (
        <Layout>
            <Heading as='h1' size='4xl' isTruncated mb="30px">
                404
            </Heading>
            <Text fontSize='6xl' mb="50px">Nice to meet you tho!</Text>
        </Layout>
    )
}

export default Custom404