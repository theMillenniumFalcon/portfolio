import React from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Flex, Box, Link, Image, Text } from '@chakra-ui/react'
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = ({ }) => {
    const router = useRouter()
    const util = ((router.asPath.split('/')[1]) as unknown) as string

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
                            <Link style={{
                                textDecoration: "none", cursor: "pointer",
                            }} mr={20}>
                                <Text _hover={{ color: '#ff424d' }} color={String(util) === "skill" ? "#ff424d" : "#ffffff"}>
                                    Skills
                                </Text>
                            </Link>
                        </NextLink>
                        <NextLink href='/stack' passHref>
                            <Link style={{
                                textDecoration: "none", cursor: "pointer",
                                color: String(util) === "stack" ? "#ff424d" : "#ffffff"
                            }} mr={20}>
                                <Text _hover={{ color: '#ff424d' }} color={String(util) === "stack" ? "#ff424d" : "#ffffff"}>
                                    Tech Stack
                                </Text>
                            </Link>
                        </NextLink>
                        <NextLink href='/experience' passHref>
                            <Link style={{
                                textDecoration: "none", cursor: "pointer",
                                color: String(util) === "experience" ? "#ff424d" : "#ffffff"
                            }} mr={20}>
                                <Text _hover={{ color: '#ff424d' }} color={String(util) === "experience" ? "#ff424d" : "#ffffff"}>
                                    Experience
                                </Text>
                            </Link>
                        </NextLink>
                        <NextLink href='/volunteering' passHref>
                            <Link style={{
                                textDecoration: "none", cursor: "pointer",
                                color: String(util) === "volunteering" ? "#ff424d" : "#ffffff"
                            }} mr={20}>
                                <Text _hover={{ color: '#ff424d' }} color={String(util) === "volunteering" ? "#ff424d" : "#ffffff"}>
                                    Volunteering
                                </Text>
                            </Link>
                        </NextLink>
                        <NextLink href='/achievement' passHref>
                            <Link style={{
                                textDecoration: "none", cursor: "pointer",
                                color: String(util) === "achievement" ? "#ff424d" : "#ffffff"
                            }} mr={20}>
                                <Text _hover={{ color: '#ff424d' }} color={String(util) === "achievement" ? "#ff424d" : "#ffffff"}>
                                    Achievements
                                </Text>
                            </Link>
                        </NextLink>
                        <NextLink href='/project' passHref>
                            <Link style={{
                                textDecoration: "none", cursor: "pointer",
                                color: String(util) === "project" ? "#ff424d" : "#ffffff"
                            }} mr={20}>
                                <Text _hover={{ color: '#ff424d' }} color={String(util) === "project" ? "#ff424d" : "#ffffff"}>
                                    Projects
                                </Text>
                            </Link>
                        </NextLink>
                        <NextLink href='/blog' passHref>
                            <Link style={{
                                textDecoration: "none", cursor: "pointer",
                                color: String(util) === "blog" ? "#ff424d" : "#ffffff"
                            }} mr={20}>
                                <Text _hover={{ color: '#ff424d' }} color={String(util) === "blog" ? "#ff424d" : "#ffffff"}>
                                    Blogs
                                </Text>
                            </Link>
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