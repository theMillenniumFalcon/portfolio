import { Box, Flex, Heading, SimpleGrid, Text, Link } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { Horizontal } from '../components/Horizontal'

interface BooksProps { }

const Books: React.FC<BooksProps> = ({ }) => {
    return (
        <>
            <Flex mt="50px" justify="center">
                <Box>
                    <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                        Some book recommendations
                    </Heading>
                    <SimpleGrid columns={2} spacing="30px" mb="30px">
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
                        <Box mb="20px">
                            <NextLink href='/books/002'>
                                <Link style={{
                                    textDecoration: "none", cursor: "pointer",
                                }}>
                                    <Text fontSize='5xl' _hover={{ color: '#ff424d' }}>
                                        002. Fahrenheit 451
                                    </Text>
                                </Link>
                            </NextLink>
                        </Box>
                    </SimpleGrid>
                    <Horizontal />
                </Box>
            </Flex>
        </>
    )
}

export default Books