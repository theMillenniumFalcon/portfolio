import { Box, Heading, SimpleGrid, Text, Image, Link } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

interface BlogProps { }

const Blog: React.FC<BlogProps> = ({ }) => {
    return (
        <Layout>
            <Box mb={10}>
                <Heading as='h1' size='4xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                    Blogs
                </Heading>
                <SimpleGrid columns={2} spacing={10}>
                    <Box mb="20px">
                        <Link
                            href="https://gssoc.girlscript.tech/"
                            style={{ textDecoration: "none", cursor: "pointer" }}
                            target="_blank"
                        >
                            <Image
                                width='320px'
                                height='180px'
                                objectFit='cover'
                                src='assets/blog/1.png'
                                alt='Getting started with freelancing'
                            />
                            <Text fontSize='3xl' mb="5px">March 2022</Text>
                            <Text fontSize='3xl'>Getting started with freelancing</Text>
                        </Link>

                    </Box>
                </SimpleGrid>
            </Box>
        </Layout>
    )
}

export default Blog