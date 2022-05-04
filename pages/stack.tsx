import { Box, Heading, Flex, Image, SimpleGrid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

interface StackProps { }

const Stack: React.FC<StackProps> = ({ }) => {
    return (
        <Layout>
            <Box>
                <Heading as='h1' size='4xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                    Tech Stack
                </Heading>
                <SimpleGrid columns={3} spacing={10}>
                    <Flex align="center" mb="20px">
                        <Image
                            boxSize='28px'
                            objectFit='cover'
                            src='assets/tech/java.png'
                            alt=''
                            mr={4}
                        />
                        <Heading as='h3' size='lg'>Java</Heading>
                    </Flex>
                    <Flex align="center" mb="20px">
                        <Image
                            boxSize='28px'
                            objectFit='cover'
                            src='assets/tech/javascript.png'
                            alt=''
                            mr={4}
                        />
                        <Heading as='h3' size='lg'>JavaScript</Heading>
                    </Flex>
                    <Flex align="center" mb="20px">
                        <Image
                            boxSize='28px'
                            objectFit='cover'
                            src='assets/tech/typescript.png'
                            alt=''
                            mr={4}
                        />
                        <Heading as='h3' size='lg'>TypeScript</Heading>
                    </Flex>
                    <Flex align="center" mb="20px">
                        <Image
                            boxSize='28px'
                            objectFit='cover'
                            src='assets/tech/react.png'
                            alt=''
                            mr={4}
                        />
                        <Heading as='h3' size='lg'>React</Heading>
                    </Flex>
                    <Flex align="center" mb="20px">
                        <Image
                            boxSize='28px'
                            objectFit='cover'
                            src='assets/tech/graphql.png'
                            alt=''
                            mr={4}
                        />
                        <Heading as='h3' size='lg'>GraphQL</Heading>
                    </Flex>
                    <Flex align="center" mb="20px">
                        <Image
                            boxSize='28px'
                            objectFit='cover'
                            src='assets/tech/mongodb.png'
                            alt=''
                            mr={4}
                        />
                        <Heading as='h3' size='lg'>MongoDB</Heading>
                    </Flex>
                    <Flex align="center" mb="20px">
                        <Image
                            boxSize='28px'
                            objectFit='cover'
                            src='assets/tech/postgresql.png'
                            alt=''
                            mr={4}
                        />
                        <Heading as='h3' size='lg'>PostgreSQL</Heading>
                    </Flex>
                    <Flex align="center" mb="20px">
                        <Image
                            boxSize='28px'
                            objectFit='cover'
                            src='assets/tech/docker.png'
                            alt=''
                            mr={4}
                        />
                        <Heading as='h3' size='lg'>Docker</Heading>
                    </Flex>
                    <Flex align="center" mb="20px">
                        <Image
                            boxSize='28px'
                            objectFit='cover'
                            src='assets/tech/cloudflare.png'
                            alt=''
                            mr={4}
                        />
                        <Heading as='h3' size='lg'>Cloudflare</Heading>
                    </Flex>
                    <Flex align="center" mb="20px">
                        <Image
                            boxSize='28px'
                            objectFit='cover'
                            src='assets/tech/linux.png'
                            alt=''
                            mr={4}
                        />
                        <Heading as='h3' size='lg'>Linux</Heading>
                    </Flex>
                    <Flex align="center" mb="20px">
                        <Image
                            boxSize='28px'
                            objectFit='cover'
                            src='assets/tech/git.png'
                            alt=''
                            mr={4}
                        />
                        <Heading as='h3' size='lg'>Git</Heading>
                    </Flex>
                </SimpleGrid>
            </Box>
        </Layout>
    )
}

export default Stack