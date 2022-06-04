import { Box, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

interface AchievementProps { }

const Achievement: React.FC<AchievementProps> = ({ }) => {
    return (
        <Layout>
            <Box>
                <Heading as='h1' size='4xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                    Achievements
                </Heading>
                <UnorderedList spacing="20px">
                    <ListItem>
                        <Heading as='h2' size='xl'>SUSE Cloud Native Scholarship Recepient</Heading>
                        <Text fontSize='3xl' color="#ff424d" mt="5px">June 2021</Text>
                    </ListItem>
                    <ListItem>
                        <Heading as='h2' size='xl'>Solved 250+ problems on Leetcode</Heading>
                        <Text fontSize='3xl' color="#ff424d" mt="5px">2020 - Present</Text>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Layout>
    )
}

export default Achievement