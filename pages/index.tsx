import { Box, Heading, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Box>
        <Heading as='h1' size='4xl' isTruncated color="#ff424d" mb="50px" mt="20px">
          Nishank Priydarshi
        </Heading>
        <Box mb="30px">
          <Text fontSize='4xl' mb="30px">
            Hello! My name is Nishank. I'm a computer science student from 🇮🇳.
            I am a keen learner📕 and deeply passionate about Software development💻.
          </Text>
          <Text fontSize='4xl' mb="30px">
            Dreaming up ideas and making them come true is where my passion lies.
            You can find my <NextLink href="/project">
              <Link style={{ color: "#ff424d", cursor: "pointer" }}>
                full projects list here.
              </Link>
            </NextLink>
          </Text>
          <Text fontSize='4xl' mb="30px">
            Outside of programming, I enjoy design, reading books and traveling.
            If you happen to be in the same city I live (currently in New Delhi),
            maybe we can hang out together.
          </Text>
          <Text fontSize='4xl' mb="30px">
            If you are interested you are checkout my recommended <NextLink href="/books">
              <Link style={{ color: "#ff424d", cursor: "pointer" }}>
                books here.
              </Link>
            </NextLink>
          </Text>
        </Box>
        <hr style={{
          height: "1px",
          width: "70px",
          borderWidth: "0",
          color: "#ff424d",
          backgroundColor: "#ff424d",
          marginRight: "auto",
          marginLeft: "auto"
        }}
        />
        <Box my="30px">
          <Text fontSize='4xl' mb="30px">
            Find me on <Link href="https://github.com/theMillenniumFalcon" style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
              GitHub, </Link>
            <Link href="https://www.linkedin.com/in/nishank-priydarshi-2526551ba/" style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
              LinkedIn, </Link>
            and <Link href="https://twitter.com/nishankstwt" style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
              Twitter.
            </Link>
          </Text>
          <Text fontSize='4xl' mb="30px">
            Mail me at <Link href="mailto: nishankpr435@gmail.com" style={{ color: "#ff424d", cursor: "pointer", textDecoration: "none" }}>
              nishankpr435@gmail.com.</Link>
          </Text>
        </Box>
        <hr style={{
          height: "1px",
          width: "70px",
          borderWidth: "0",
          color: "#ff424d",
          backgroundColor: "#ff424d",
          marginRight: "auto",
          marginLeft: "auto"
        }}
        />
      </Box>
    </Layout>
  )
}

export default Home
