import React from "react";
import { Box, Image } from "@chakra-ui/react";

interface ToggleProps { }

const Toggle: React.FC<ToggleProps> = ({ }) => {
    return (
        <Box
            width="50px"
            height="24px"
            border="1px solid #222"
            borderRadius="20px"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            position="fixed"
            right="27vw"
        >
            <Image
                cursor='pointer'
                htmlWidth='17px'
                htmlHeight='17px'
                objectFit='cover'
                src='assets/toggle/moon.png'
                alt=''
            />
            <Image
                cursor='pointer'
                htmlWidth='17px'
                htmlHeight='17px'
                objectFit='cover'
                src='assets/toggle/sun.png'
                alt=''
            />
            <Box
                width="24px"
                height="24px"
                borderRadius="50%"
                backgroundColor="white"
                cursor="pointer"
                position="absolute"
                right="0px"
            />
        </Box>
    )
}

export default Toggle