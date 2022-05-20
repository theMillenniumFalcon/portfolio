import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Horizontal } from '../../components/Horizontal'
import { useScript } from '../../hooks/useScript';

interface VintageProps { }

const Vintage: React.FC<VintageProps> = ({ }) => {
    useScript('../../processing.js')
    return (
        <Box mt="50px" mx="auto" maxW="46vw" w="100%" marginBottom="20px">
            <Heading as='h2' size='3xl' isTruncated color="#ff424d" mb="50px" mt="20px">
                {"Vintage Graphics"}
            </Heading>
            <Flex align="center" justify="center" height="75vh" width="37vw" marginLeft="auto" marginRight="auto">
                <Box height="85%" width="85%" border="1px solid white">
                    <canvas data-processing-sources="../../processing/main.pde"></canvas>
                </Box>
            </Flex>
            <Horizontal />
        </Box>
    )
}

export default Vintage