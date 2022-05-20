import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Horizontal } from '../../components/Horizontal'

interface GridProps { }

const Grid: React.FC<GridProps> = ({ }) => {
    return (
        <Box mt="50px" mx="auto" maxW="46vw" w="100%" marginBottom="20px">
            <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                {"Grid System"}
            </Heading>
            <Flex align="center" justify="center" height="75vh" width="37vw" marginLeft="auto" marginRight="auto">
                <Box height="85%" width="85%">
                    <video width="100%" height="100%" autoPlay={true} controls loop={true} playsInline={true}>
                        <source src="/assets/video/grid.mp4" type="video/mp4" />
                    </video>
                </Box>
            </Flex>
            <Horizontal />
        </Box>
    )
}

export default Grid