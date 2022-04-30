import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Horizontal } from '../../components/Horizontal'

interface CrimeandPunishmentProps { }

const CrimeandPunishment: React.FC<CrimeandPunishmentProps> = ({ }) => {
    return (
        <>
            <Flex mt="50px" mx="auto" maxW="46vw" w="100%" marginBottom="20px">
                <Box>
                    <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                        {"Crime and Punishment"}
                    </Heading>
                    <Text fontSize='5xl' mb="30px">
                       {" What drives someone to murder in cold blood, What goes through the murderer's mind"}
                        {"and What kind of society breeds such people? These are some of the aspects adderessed by Crime and"}
                        {"Punishment written by Fyodor Dostoevsky."}
                    </Text>
                    <Text fontSize='5xl' mb="30px">
                        {"Crime and Punishment, being one of the best known works of russian literature, narrates"}
                        {"the story of a young man in Saint Petersburg, who lives in extreme poverty and has run out"}
                        {"of funds at the start of the story. Letters from his rural home only add to his distress, when"}
                        {"he realises the sacrifices of his mother and sister. Increasingly desperate after selling"}
                        {"his last valuables to an elderly pawnbroker, he plans to murder and rob her, but the act of"}
                        {"carrying this act was way more than he was prepared for."}
                    </Text>
                    <Text fontSize='5xl' mb="30px">
                        {"The scope of the story is way beyond a typical psychological thriller, from dank taverns to"}
                        {"dilapidated apartments and claustrophobic police stations, the underbelly of 19th century Saint"}
                        {"Petersburg is brough to life by Dostoevsky's searing prose."}
                    </Text>
                    <Horizontal />
                </Box>
            </Flex>
        </>
    )
}

export default CrimeandPunishment