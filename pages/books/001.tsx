import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

interface MockingbirdProps { }

const Mockingbird: React.FC<MockingbirdProps> = ({ }) => {
    return (
        <>
            <Flex mt="50px" mx="auto" maxW="700px" w="100%" marginBottom="20px">
                <Box>
                    <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                        To Kill a Mockingbird
                    </Heading>
                    <Text fontSize='5xl' mb="30px">
                        I grew up knowing very little of prejudice and I remember feeling incensed
                        over the injustice of Scout’s world when I first read To Kill A Mocking Bird.
                        I also remember I was intrigued with Boo Radley, just as the children were curious
                        to test their boundaries concerning Boo.
                    </Text>
                    <Text fontSize='5xl' mb="30px">
                        Reading To Kill A Mocking Bird again, about 20 years later, has been an interesting
                        experience. I still cannot understand the deep hatred of prejudice and felt many of my
                        previous emotions. However, this time I have also considered the emotions of teenagers
                        reading such raw emotions and reading about a sexually charged situation and wonder if
                        there might not be other books to teach these same values that will not make the children
                        so uncomfortable. When my oldest child read the book in school he felt most of it was
                        boring (he doesn’t love reading at this point and time in his life), but even more
                        importantly he was so uncomfortable with the accusation of rape that I think he, perhaps,
                        missed some of the bigger issues being taught.
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