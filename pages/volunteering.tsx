import { Box, Heading, UnorderedList, ListItem, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

interface VolunteeringProps { }

const Volunteering: React.FC<VolunteeringProps> = ({ }) => {
    return (
        <Layout>
            <Box mb={10}>
                <Heading as='h1' size='4xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                    Volunteering
                </Heading>
                <UnorderedList spacing="30px">
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">I am Remarkable Facilitator</Heading>
                        <Text fontSize='3xl' color="#ff424d" mb="5px">
                            <Link
                                href="https://iamremarkable.withgoogle.com/"
                                style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                target="_blank"
                            >
                                I am Remarkable
                            </Link>
                        </Text>
                        <Text fontSize='3xl' mb="5px">January 2022 - Present</Text>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    As a facilitator my role involves hosting workshops and being an ambassador for
                                    #IamRemarkable within my personal and professional networks.
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">Contributor</Heading>
                        <Text fontSize='3xl' color="#ff424d" mb="5px">
                            <Link
                                href="https://gssoc.girlscript.tech/"
                                style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                target="_blank"
                            >
                                GirlScript summer of code
                            </Link>
                        </Text>
                        <Text fontSize='3xl' mb="5px">March 2021 - May 2021</Text>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    Contributed to management and web-dev related projects in Gssoc 2022.
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">Event Coordinator</Heading>
                        <Text fontSize='3xl' color="#ff424d" mb="5px">
                            <Link
                                href="https://spectraverseincusivity.wordpress.com/"
                                style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                target="_blank"
                            >
                                Spectraverse
                            </Link>
                        </Text>
                        <Text fontSize='3xl' mb="5px">April 2017 - August 2018</Text>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    My role as an event coordinator was to ensure that all the activities and
                                    events went without any troubles and prolems.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    I also actively took part in various campaigns and drives raising awareness among the public.
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Layout>
    )
}

export default Volunteering