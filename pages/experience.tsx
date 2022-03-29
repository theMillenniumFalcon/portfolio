import { Box, Heading, UnorderedList, ListItem, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

interface ExperienceProps { }

const Experience: React.FC<ExperienceProps> = ({ }) => {
    return (
        <Layout>
            <Box mb={10}>
                <Heading as='h1' size='4xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                    Experience
                </Heading>
                <UnorderedList spacing="30px">
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">Graphics Designer Intern</Heading>
                        <Text fontSize='3xl' color="#ff424d" mb="5px">
                            <Link
                                href="https://yellowfishes.com/"
                                style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                target="_blank"
                            >
                                Yellow Fishes
                            </Link>
                        </Text>
                        <Text fontSize='3xl' mb="5px">April 2016 - June 2016</Text>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    As a graphics designer intern, my main responsibility was assisting the designers in the branding process.
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Layout>
    )
}

export default Experience