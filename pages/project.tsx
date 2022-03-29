import { Box, Heading, UnorderedList, ListItem, Text, Link, Flex } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

interface ProjectProps { }

const Project: React.FC<ProjectProps> = ({ }) => {
    return (
        <Layout>
            <Box mb={10}>
                <Heading as='h1' size='4xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                    Projects
                </Heading>
                <UnorderedList spacing="30px">
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">BitClout</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    This project is developed using React and Next.js on the frontend using TypeScript,
                                    Nodejs on the backend, and GraphQL as the query language.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="5px">
                                    Database used in PostgreSQL, Redis as a cache store, and Apollo platform to transfer
                                    data between the server and the UI.
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d" mr={20}>
                                    <Link
                                        href="https://www.linkedin.com/in/nishank-priydarshi-2526551ba/"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Showcase
                                    </Link>
                                </Text>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://www.linkedin.com/in/nishank-priydarshi-2526551ba/"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Code
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    /////////////////////////////
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">Mailer</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    A tool written in python used to send emails to the masses.
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/mailer"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Code
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    /////////////////////////////
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">Private network DNS server</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    A tool written in python used to send emails to the masses.
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/private-network-DNS-server"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Code
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    /////////////////////////////
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">Blog App</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    The frontend of the project was build with nextjs using Javascript as the programming language,
                                    the styling UI was done using TailwindCSS.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="5px">
                                    GraphQL was used the query language for fullfilling the queries while the the addition and
                                    deletion is done using graphCMS.
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d" mr={20}>
                                    <Link
                                        href="https://next-serverless-bpc5r08e9-themillenniumfalcon.vercel.app/"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Showcase
                                    </Link>
                                </Text>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/graphql-next"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Code
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    /////////////////////////////
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">A group chat app</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    This project was made during a hackathon, using React on the frontend and Node.js on the backend.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="5px">
                                    The chat feature was made using getStream.io pre-build components.
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d" mr={20}>
                                    <Link
                                        href="https://cloud-native-hacks-hangout.netlify.app/"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Showcase
                                    </Link>
                                </Text>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/cloud-native-hack-submission"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Code
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    /////////////////////////////
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">Space Invaders</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    A browser game which was created with the HTML canvas element using Javascript as the programming language.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="5px">
                                    Implemented garbage collection to improve performance and to provide a better experience.
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d" mr={20}>
                                    <Link
                                        href="https://space-invaders-falcon.vercel.app/"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Showcase
                                    </Link>
                                </Text>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/space-invaders"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Code
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    /////////////////////////////
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">Conway's Game of Life Implementation</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    Implemented Conway's Game of Life in Javascript using ReactJS and React hooks.
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d" mr={20}>
                                    <Link
                                        href="https://conway-game-react.netlify.app/"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Showcase
                                    </Link>
                                </Text>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/Conway-game-react"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Code
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    ////////////////////////////////
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">Invisible Cloak</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    Created a invisiblity cloak using python and OpenCV. The cloak color for the program to work should be red.
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/invisible-cloak"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        Code
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    /////////////////////////////
                </UnorderedList>
            </Box>
        </Layout>
    )
}

export default Project