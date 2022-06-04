import { Box, Heading, Flex, Image, SimpleGrid, GridItem, UnorderedList, ListItem } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

interface StackProps { }

const Tools: React.FC<StackProps> = ({ }) => {
    return (
        <Layout>
            <Box>
                <Heading as='h1' size='4xl' isTruncated color="#ff424d" mb="30px" mt="20px">
                    Tools I use
                </Heading>
                <UnorderedList spacing="20px">
                    <ListItem>
                        <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="20px">Tech:</Heading>
                        <SimpleGrid columns={3} spacing={10}>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/java.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>Java</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/javascript.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>JavaScript</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/typescript.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>TypeScript</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/react.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>React</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/node.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>Node</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/graphql.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>GraphQL</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/mongodb.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>MongoDB</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/postgresql.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>PostgreSQL</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/docker.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>Docker</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/bash.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>Bash</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/nginx.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>Nginx</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/cloudflare.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>Cloudflare</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/linux.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>Linux</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/tech/git.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>Git</Heading>
                            </Flex>
                        </SimpleGrid>
                    </ListItem>
                    <ListItem>
                    <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="20px">Design:</Heading>
                        <SimpleGrid columns={3} spacing={10}>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/design/photoshop.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>Photoshop</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/design/illustrator.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>Illustrator</Heading>
                            </Flex>
                            <Flex align="center" mb="20px" cursor="default">
                                <Image
                                    boxSize='28px'
                                    objectFit='cover'
                                    src='assets/tools/design/xd.png'
                                    alt=''
                                    mr={4}
                                />
                                <Heading as='h3' size='lg'>Adobe Xd</Heading>
                            </Flex>
                        </SimpleGrid>
                    </ListItem>
                </UnorderedList>

            </Box>
        </Layout>
    )
}

export default Tools