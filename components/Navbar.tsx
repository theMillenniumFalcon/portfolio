import React from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Flex, Link, Text } from '@chakra-ui/react'

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = ({ }) => {
    const router = useRouter()
    const util = ((router.asPath.split('/')[1]) as unknown) as string

    return (
        <Flex zIndex={1} top={0} height="75px"> 
            <Flex flex={1} m="auto" maxW="46vw" paddingTop={40} flexWrap="wrap">
                <NextLink href='/' passHref>
                    <Link style={{
                        textDecoration: "none", cursor: "pointer",
                    }} mr={12}>
                        <Text _hover={{ color: '#ff424d' }} color={String(util) === "" ? "#ff424d" : "#ffffff"}>
                            Home
                        </Text>
                    </Link>
                </NextLink>
                <NextLink href='/skill' passHref>
                    <Link style={{
                        textDecoration: "none", cursor: "pointer",
                    }} mr={12}>
                        <Text _hover={{ color: '#ff424d' }} color={String(util) === "skill" ? "#ff424d" : "#ffffff"}>
                            Skills
                        </Text>
                    </Link>
                </NextLink>
                <NextLink href='/stack' passHref>
                    <Link style={{
                        textDecoration: "none", cursor: "pointer",
                        color: String(util) === "stack" ? "#ff424d" : "#ffffff"
                    }} mr={12}>
                        <Text _hover={{ color: '#ff424d' }} color={String(util) === "stack" ? "#ff424d" : "#ffffff"}>
                            Tech-Stack
                        </Text>
                    </Link>
                </NextLink>
                <NextLink href='/experience' passHref>
                    <Link style={{
                        textDecoration: "none", cursor: "pointer",
                        color: String(util) === "experience" ? "#ff424d" : "#ffffff"
                    }} mr={12}>
                        <Text _hover={{ color: '#ff424d' }} color={String(util) === "experience" ? "#ff424d" : "#ffffff"}>
                            Experience
                        </Text>
                    </Link>
                </NextLink>
                <NextLink href='/volunteering' passHref>
                    <Link style={{
                        textDecoration: "none", cursor: "pointer",
                        color: String(util) === "volunteering" ? "#ff424d" : "#ffffff"
                    }} mr={12}>
                        <Text _hover={{ color: '#ff424d' }} color={String(util) === "volunteering" ? "#ff424d" : "#ffffff"}>
                            Volunteering
                        </Text>
                    </Link>
                </NextLink>
                <NextLink href='/achievement' passHref>
                    <Link style={{
                        textDecoration: "none", cursor: "pointer",
                        color: String(util) === "achievement" ? "#ff424d" : "#ffffff"
                    }} mr={12}>
                        <Text _hover={{ color: '#ff424d' }} color={String(util) === "achievement" ? "#ff424d" : "#ffffff"}>
                            Achievements
                        </Text>
                    </Link>
                </NextLink>
                <NextLink href='/project' passHref>
                    <Link style={{
                        textDecoration: "none", cursor: "pointer",
                        color: String(util) === "project" ? "#ff424d" : "#ffffff"
                    }} mr={12}>
                        <Text _hover={{ color: '#ff424d' }} color={String(util) === "project" ? "#ff424d" : "#ffffff"}>
                            Projects
                        </Text>
                    </Link>
                </NextLink>
                <NextLink href='/blog' passHref>
                    <Link style={{
                        textDecoration: "none", cursor: "pointer",
                        color: String(util) === "blog" ? "#ff424d" : "#ffffff"
                    }} mr={12}>
                        <Text _hover={{ color: '#ff424d' }} color={String(util) === "blog" ? "#ff424d" : "#ffffff"}>
                            Blogs
                        </Text>
                    </Link>
                </NextLink>
            </Flex>
        </Flex>
    )
}

export default Navbar