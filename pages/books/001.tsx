import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

interface MockingbirdProps { }

const Mockingbird: React.FC<MockingbirdProps> = ({ }) => {
    return (
        <>
            <Flex mt="50px" mx="auto" maxW="46vw" w="100%" marginBottom="20px">
                <Box>
                    <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                        Crime and Punishment
                    </Heading>
                    <Text fontSize='5xl' mb="30px">
                        What drives someone to murder in cold blood, What goes through the murderer's mind
                        and What kind of society breeds such people? These are some of the aspects adderessed by Crime and
                        Punishment written by Fyodor Dostoevsky.
                    </Text>
                    <Text fontSize='5xl' mb="30px">
                        Crime and Punishment, being one of the best known works of russian literature, narrates
                        the story of a young man in Saint Petersburg, who lives in extreme poverty and has run out
                        of funds at the start of the story. Letters from his rural home only add to his distress, when
                        he realises the sacrifices of his mother and sister. Increasingly desperate after selling
                        his last valuables to an elderly pawnbroker, he plans to murder and rob her, but the act of
                        carrying this act was way more than he was prepared for.
                    </Text>
                    <Text fontSize='5xl' mb="30px">
                        The scope of the story is way beyond a typical psychological thriller, from dank taverns to
                        dilapidated apartments and claustrophobic police stations, the underbelly of 19th century Saint
                        Petersburg is brough to life by Dostoevsky's searing prose.

                    </Text>
                    <Text fontSize='5xl' mb="30px">
                        This bleak portrait of russian society reflects the author's own complex life experiences and
                        evolving ideas.
                    </Text>
                    <Text fontSize='5xl' mb="30px">
                        There are other themes and symbols that could be explored, but the point is that
                        To Kill A Mockingbird has a timeless quality and thought provoking situations
                        that make it a classic.
                    </Text>
                    <hr style={{
                        height: "1px",
                        width: "70px",
                        borderWidth: "0",
                        color: "#ff424d",
                        backgroundColor: "#ff424d",
                        marginRight: "auto",
                        marginLeft: "auto"
                    }}
                    />
                </Box>
            </Flex>
        </>
    )
}

export default Mockingbird