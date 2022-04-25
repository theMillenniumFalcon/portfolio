import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

interface BooksProps { }

const Books: React.FC<BooksProps> = ({ }) => {
    return (
        <>
            <Flex mt="50px" justify="center">
                <Box>
                    <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                        Some book recommendations
                    </Heading>
                    <SimpleGrid columns={2} spacing={10} mb="30px">
                        <Box mb="20px">
                            <Text fontSize='5xl'>001. To Kill a Mockingbird</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>002. The Fault in Our Stars</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>003. Crime and Punishment</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>004. Dune</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>005. The Kite Runner</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>006. The Courage to be Disliked</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>007. Kafka on the Shore</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>008. Pride and Prejudice</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>009. Steve Jobs</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>010. A Wrinkle in Time</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>011. In Cold Blood</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>012. The Shining</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>013. A Thousand Splendid Suns</Text>
                        </Box>
                        <Box mb="20px">
                            <Text fontSize='5xl'>013. David Copperfield</Text>
                        </Box>
                    </SimpleGrid>
                    <hr style={{
                        height: "1px",
                        width: "70px",
                        borderWidth: "0",
                        color: "#ff424d",
                        backgroundColor: "#ff424d",
                        marginRight: "auto",
                        marginLeft: "auto"
                    }}
                    />
                </Box>
            </Flex>
        </>
    )
}

export default Books