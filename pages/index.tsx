import { Box, Heading, Text, Link, Image } from '@chakra-ui/react'
import NextLink from 'next/link'
import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Horizontal } from '../components/Horizontal';

const Home: NextPage = () => {
  return (
    <Layout>
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
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
        </Box>
        <Heading as='h1' size='4xl' isTruncated color="#ff424d" mb="30px" mt="10px" cursor="default">
          {"Nishank Priydarshi"}
        </Heading>
        <Box>
          <Text fontSize='4xl' mb="30px">
            {"Hello! My name is Nishank. I'm a computer science student from 🇮🇳. I am a keen learner📕 and deeply passionate about Software development💻."}
          </Text>
          <Text fontSize='4xl' mb="30px">
            {"Dreaming up ideas and making them come true is where my passion lies. You can find my"} <NextLink href="/project" passHref>
              <Link style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
                {"full projects list here."}
              </Link>
            </NextLink>
          </Text>
          <Text fontSize='4xl' mb="30px">
            {"Outside of programming, I enjoy design, reading books and traveling. If you happen to be in the same city I live (currently in New Delhi), maybe we can hang out together."}
          </Text>
          <Text fontSize='4xl' mb="30px">
            If you are interested you are checkout my recommended <NextLink href="/books" passHref>
              <Link style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
                books here.
              </Link>
            </NextLink>
          </Text>
        </Box>
        <Horizontal />
        <Box>
          <Text fontSize='4xl' mb="30px">
            Find me on <Link href="https://github.com/theMillenniumFalcon" style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
              GitHub, </Link>
            <Link href="https://www.linkedin.com/in/nishank-priydarshi-2526551ba/" style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
              LinkedIn, </Link>
            <Link href="https://twitter.com/nishankstwt" style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
              Twitter, </Link>
            <Link href="https://hashnode.com/@nishankpr" style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
              Hashnode, </Link>
            <Link href="https://www.showwcase.com/nishankpr" style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
              Showwcase, </Link>
            and <Link href="https://www.polywork.com/burritospeakers" style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
              Polywork.
            </Link>
          </Text>
          <Text fontSize='4xl' mb="30px">
            You can also subscribe to my newsletter on <Link href="https://nishankpr.substack.com/" style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
              Substack.
            </Link>
          </Text>
          <Text fontSize='4xl' mb="30px">
            Mail me at <Link href="mailto: nishankpr435@gmail.com" style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
              nishankpr435@gmail.com.</Link>
          </Text>
        </Box>
        <Horizontal />
      </Box>
    </Layout>
  )
}

export default Home
