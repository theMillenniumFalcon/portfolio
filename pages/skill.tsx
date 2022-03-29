import { Box, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

interface SkillProps { }

const Skill: React.FC<SkillProps> = ({ }) => {
    return (
        <Layout>
            <Box>
                <Heading as='h1' size='4xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                    Skills
                </Heading>
                <UnorderedList spacing="20px">
                    <ListItem>
                        <Heading as='h3' size='lg'>Data structures and algorithms</Heading>
                    </ListItem>
                    <ListItem>
                        <Heading as='h3' size='lg'>Full stack web development</Heading>
                    </ListItem>
                    <ListItem>
                        <Heading as='h3' size='lg'>Web security</Heading>
                    </ListItem>
                    <ListItem>
                        <Heading as='h3' size='lg'>Object oriented programming</Heading>
                    </ListItem>
                    <ListItem>
                        <Heading as='h3' size='lg'>Database management systems</Heading>
                    </ListItem>
                    <ListItem>
                        <Heading as='h3' size='lg'>Computer networks</Heading>
                    </ListItem>
                    <ListItem>
                        <Heading as='h3' size='lg'>Operating systems</Heading>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Layout>
    )
}

export default Skill