import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Horizontal } from '../../components/Horizontal'

interface FahrenheitProps { }

const Fahrenheit: React.FC<FahrenheitProps> = ({ }) => {
    return (
        <>
            <Flex mt="50px" mx="auto" maxW="46vw" w="100%" marginBottom="20px">
                <Box>
                    <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                        {"Fahrenheit 451"}
                    </Heading>
                    <Text fontSize='5xl' mb="30px">
                        {"This Ray Bradbury book imagines a dystopian world where books are banned from all areas of life, and "}
                        {"reading, let alone possessing them, is forbidden and lead to fatal. The protagonist, Guy Montag is a fireman, "}
                        {"reponsible for destroying what remains but as his pleasure sparks doubt, the story presents a critical "}
                        {" question on how to preserve one's mind in a society where free will, self expression and curiosity are "}
                        {"under fire."}
                    </Text>
                    <Text fontSize='5xl' mb="30px">
                        {" As he sets books ablaze, Montag's mind occasionally wanders to the contraband that lies hidden in his home."}
                        {"Gradually, he begins to question the basis of his work. Fahrenheit 451 depicts a world governed by surveillance,"}
                        {"robotics and virtual reality, a vision that proved remarkably prescient, but also spoke to the concerns of "}
                        {" the time. The book is also titled after the temperature at which paper burns."}
                    </Text>
                    <Text fontSize='5xl' mb="30px">
                        {" Though some consider Fahrenheit 451 as one of the finest works of dystopian fiction, but I found it to be "}
                        {" pretty mediocre. "}
                    </Text>
                    <Horizontal />
                </Box>
            </Flex>
        </>
    )
}

export default Fahrenheit