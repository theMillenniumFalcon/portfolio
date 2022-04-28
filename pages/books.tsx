import { Box, Flex, Heading, SimpleGrid, Text, Link } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

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
                            <NextLink href='/books/001'>
                                <Link style={{
                                    textDecoration: "none", cursor: "pointer",
                                }}>
                                    <Text fontSize='5xl' _hover={{ color: '#ff424d' }}>
                                        001. Crime and Punishment
                                    </Text>
                                </Link>
                            </NextLink>
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