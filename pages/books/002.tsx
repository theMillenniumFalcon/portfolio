import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Horizontal } from '../../components/Horizontal'

interface KafkaProps { }

const Kafka: React.FC<KafkaProps> = ({ }) => {
    return (
        <>
            <Flex mt="50px" mx="auto" maxW="46vw" w="100%" marginBottom="20px">
                <Box>
                    <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                        {"Kafka on the Shore"}
                    </Heading>
                    <Text fontSize='5xl' mb="30px">
                        {"Nothing to see hear, yet! "}
                    </Text>
                    <Horizontal />
                </Box>
            </Flex>
        </>
    )
}

export default Kafka