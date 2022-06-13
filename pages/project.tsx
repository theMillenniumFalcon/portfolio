import { Box, Heading, UnorderedList, ListItem, Text, Link, Flex } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

interface ProjectProps { }

const Project: React.FC<ProjectProps> = ({ }) => {
    return (
        <Layout>
            <Box mb={10}>
                <Heading as='h1' size='4xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                    {"Projects"}
                </Heading>
                <UnorderedList spacing="30px">
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">{"bonfire"}</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    {"A highly scalable web sockets based voice chat web-application."}
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px" color="#ff424d">
                                    {"Currently under development."}
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/bonfire"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Code"}
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">{"BitClout"}</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    {"This project is developed using React and Next.js on the frontend using TypeScript, Nodejs on the backend, and GraphQL as the query language."}
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="5px">
                                    {"Database used in PostgreSQL, Redis as a cache store, and Apollo platform to transfer data between the server and the UI."}
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/BitClout"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Code"}
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">{"Containerizing a node application & deploying using ECS"}</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    {"In this project, a simple node application and put it into a container for deployment on EC2 Container Service."}
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="5px">
                                    {"ECS also has built in features to roll out deploys with zero downtime, gather metrics and logs from your containers, and auto scale the number of containers you are running based on metrics."}
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/node-aws-microservices"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Code"}
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">{"ScreenShare"}</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    {"The application intends to let anyone share their screen with one or more number of people. Application is developed using html, css and vanilla javascript."}
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="5px">
                                    {"The application completely respects your privacy and ensures that none of the data will ever be sniffed/saved by me. "}
                                    {" It also guarantees minimum latency as the connection is peer-to-peer rather than usual peer-to-server-to-peer."}
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d" mr={20}>
                                    <Link
                                        href="https://screenshare-webrtc.vercel.app/"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Showcase"}
                                    </Link>
                                </Text>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/screenshare-webrtc"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Code"}
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">{"Mailer"}</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    {"A tool written in python used to send emails to the masses."}
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/mailer"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Code"}
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">{"Battleship"}</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    {"An easy to use engine to make your own Battleship Game made in javascript."}
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="5px">
                                    {"Battleship supports a standalone library, which doesn't rely on anything, except a HTML5 capable browser and is compatible with all major browsers (Chrome, Safari, Firefox, Opera, Edge) and mobile devices."}
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d" mr={20}>
                                    <Link
                                        href="https://console-battleship.vercel.app/"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Showcase"}
                                    </Link>
                                </Text>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/battleship"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Code"}
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">{"DNS server"}</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    {"Created a DNS server to track packets travelling in and from our local machine."}
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/private-network-DNS-server"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Code"}
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">{"A group chat app"}</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    {"This project was made during a hackathon, using React on the frontend and Node.js on the backend."}
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="5px">
                                    {"The chat feature was made using getStream.io pre-build components."}
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d" mr={20}>
                                    <Link
                                        href="https://cloud-native-hacks-hangout.netlify.app/"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Showcase"}
                                    </Link>
                                </Text>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/cloud-native-hack-submission"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Code"}
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">{"Space Invaders"}</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    {"A browser game which was created with the HTML canvas element using Javascript as the programming language."}
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize='3xl' mb="5px">
                                    {"Implemented garbage collection to improve performance and to provide a better experience."}
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d" mr={20}>
                                    <Link
                                        href="https://space-invaders-falcon.vercel.app/"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Showcase"}
                                    </Link>
                                </Text>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/space-invaders"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Code"}
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">{"Conway's Game of Life Implementation"}</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    {"Implemented Conway's Game of Life in Javascript using ReactJS and React hooks."}
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d" mr={20}>
                                    <Link
                                        href="https://conway-game-react.netlify.app/"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Showcase"}
                                    </Link>
                                </Text>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/Conway-game-react"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Code"}
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl' mb="5px">{"Invisible Cloak"}</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize='3xl' mb="3px">
                                    {"Created a invisiblity cloak using python and OpenCV. The cloak color for the program to work should be red."}
                                </Text>
                            </ListItem>
                            <Flex>
                                <Text fontSize='3xl' color="#ff424d">
                                    <Link
                                        href="https://github.com/theMillenniumFalcon/invisible-cloak"
                                        style={{ textDecoration: "none", cursor: "pointer", color: "#ff424d" }}
                                        target="_blank"
                                    >
                                        {"Code"}
                                    </Link>
                                </Text>
                            </Flex>
                        </UnorderedList>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Layout>
    )
}

export default Project