import React from 'react'
import NextLink from 'next/link'
import { Flex, Heading, Box, Link, Image } from '@chakra-ui/react'
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = ({ }) => {
    return (
        <Flex zIndex={1} top={0} height="90px">
            <Flex flex={1} m="auto" align="center" maxW={1400}>
                <NextLink href="/" passHref>
                    <Image
                        cursor='pointer'
                        htmlWidth='210px'
                        htmlHeight='70px'
                        objectFit='cover'
                        src='assets/hero/hero.png'
                        alt=''
                        mr={4}
                    />
                </NextLink>
                <Flex ml={"auto"} align="center">
                    <Flex>
                        <NextLink href='/skill' passHref>
                            <Link style={{ textDecoration: "none", cursor: "pointer" }} mr={20}>Skills</Link>
                        </NextLink>
                        <NextLink href='/stack' passHref>
                            <Link style={{ textDecoration: "none", cursor: "pointer" }} mr={20}>Tech Stack</Link>
                        </NextLink>
                        <NextLink href='/experience' passHref>
                            <Link style={{ textDecoration: "none", cursor: "pointer" }} mr={20}>Experience</Link>
                        </NextLink>
                        <NextLink href='/volunteering' passHref>
                            <Link style={{ textDecoration: "none", cursor: "pointer" }} mr={20}>Volunteering</Link>
                        </NextLink>
                        <NextLink href='/project' passHref>
                            <Link style={{ textDecoration: "none", cursor: "pointer" }} mr={20}>Projects</Link>
                        </NextLink>
                        <NextLink href='/blog' passHref>
                            <Link style={{ textDecoration: "none", cursor: "pointer" }} mr={20}>Blogs</Link>
                        </NextLink>
                    </Flex>
                    <Box>
                        <Link href="mailto: nishankpr435@gmail.com" mr={20}>
                            <MailIcon />
                        </Link>
                        <Link href="https://github.com/theMillenniumFalcon" target="_blank" mr={20}>
                            <GitHubIcon />
                        </Link>
                        <Link href="https://www.linkedin.com/in/nishank-priydarshi-2526551ba/" target="_blank" mr={20}>
                            <LinkedInIcon />
                        </Link>
                        <Link href="https://twitter.com/nishankstwt" target="_blank">
                            <TwitterIcon />
                        </Link>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar