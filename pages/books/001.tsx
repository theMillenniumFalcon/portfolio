import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

interface MockingbirdProps { }

const Mockingbird: React.FC<MockingbirdProps> = ({ }) => {
    return (
        <>
            <Flex mt="50px" mx="auto" maxW="700px" w="100%" marginBottom="20px">
                <Box>
                    <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                    Crime and Punishment
                    </Heading>
                    <Text fontSize='5xl' mb="30px">
                        What derives someone to murder in cold blood, What goes through the murderer's mind
                        and What kind of society breeds such people? These are some of the aspects adderessed by Crime and
                        Punishment written by Fyodor Dostoevsky.
                    </Text>
                    <Text fontSize='5xl' mb="30px">
                        Crime and Punishment, being one of the best known works of russian literature, narrates
                        the story of a young man in Saint Petersburg, who lives in extreme poverty and has run out
                        of funds at the start of the story. Letters from his rural home only add to his distress, when
                        he realises the sacrifices of his mother and sister. 
                    </Text>
                    <Text fontSize='5xl' mb="30px">
                        Inspite of my previous statements, I have to say that I still enjoy the book and
                        feel it does deserve the title of being a classic because it explores how human
                        beings feel, how we change, and examines all of these issues through the use of
                        symbols, dialogue and other literary means. It is brilliantly written.
                    </Text>
                    <Text fontSize='5xl' mb="30px">
                        Boo Radley is the prime example of a mockingbird as pointed out by Scout.
                        He has become a recluse, unable to be around people, because of the abuse
                        of his father. His mind has reverted into a child-like state as witnessed
                        by his treasures that he shares with Scout and Jem. He witnesses Mr. Ewell
                        trying to harm Scout and knows he must act to preserve her innocence despite
                        the foggy understanding he has of life. Boo’s child-like demeanor is emphasized
                        when Scout gently takes his hand to lead him out of a corner, she knows that she
                        has nothing to fear from this innocent man.
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