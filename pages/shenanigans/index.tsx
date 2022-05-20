import { Box, Flex, Heading, SimpleGrid, Text, Link } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { Horizontal } from '../../components/Horizontal'

interface ShenanigansProps { }

const Shenanigans: React.FC<ShenanigansProps> = ({ }) => {
    return (
        <>
            <Flex mt="50px" justify="center">
                <Box>
                    <Flex align="center">
                    <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                        My Processing & Threejs Shenanigans
                    </Heading>
                    </Flex>
                    <SimpleGrid columns={3} spacing="30px" mb="30px">
                        <Box mb="20px">
                            <NextLink passHref href='/shenanigans/001'>
                                <Link style={{
                                    textDecoration: "none", cursor: "pointer",
                                }}>
                                    <Text fontSize='5xl' _hover={{ color: '#ff424d' }}>
                                        001. Vintage Graphics
                                    </Text>
                                </Link>
                            </NextLink>
                        </Box>
                        <Box mb="20px">
                            <NextLink passHref href='/shenanigans/002'>
                                <Link style={{
                                    textDecoration: "none", cursor: "pointer",
                                }}>
                                    <Text fontSize='5xl' _hover={{ color: '#ff424d' }}>
                                        002. Grid System
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

export default Shenanigans