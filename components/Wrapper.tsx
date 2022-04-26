import React from "react";
import { Box } from "@chakra-ui/react";

interface WrapperProps { }

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <Box
            mt={8}
            mx="auto"
            maxW = "700px"
            w="100%"
            backgroundColor="red"
        >
            {children}
        </Box>
    )
}

export default Wrapper