import { Box, Heading, UnorderedList, Flex, ListItem, Link, Text } from '@chakra-ui/react'
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
                        <Flex align="center" justify="space-between">
                            <Heading as='h2' size='xl' mb="5px">Content Writer Intern</Heading>
                            <Text><i>Remote</i></Text>
                        </Flex>
                        <Text fontSize='3xl' color="#ff424d" mb="5px">
                            <Link
                                href="https://www.omio.com/"
                                style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                target="_blank"
                            >
                                Omio
                            </Link>
                        </Text>
                        <Text fontSize='3xl' mb="5px">January 2022 - February 2022</Text>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    Part of the content team at Omio, my main responsibility was to write content for their website.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    Also contributed in other tasks like blog posts for feature announcements, putting together thought leadership
                                    posts for guest publications. Also wrote few scripts for feature videos.
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Flex align="center" justify="space-between">
                            <Heading as='h2' size='xl' mb="5px">Graphics Designer Intern</Heading>
                            <Text><i>Remote</i></Text>
                        </Flex>
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
                                    Part of the Marketing and Branding team that helps in marketing and rebranding of different brands.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    As the part of the team, my main responsibility was assisting the designers in the branding process.
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