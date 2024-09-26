import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container maxW="container.md">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Software Engineer based in England!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Michael Groves
          </Heading>
          <p> Engineer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/michael3.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Paragraph>
        With 3 years of experience as a software engineer, 
        Michael has had the opportunity to develop his skills in both Object-Oriented and 
        Functional programming, working on diverse projects that have strengthened his 
        passion for building innovative and efficient solutions.<br></br>
        Before transitioning into tech, 
        Michael spent over a decade in the music industry as a professional songwriter and 
        touring musician, collaborating with various artists and honing his creative 
        problem-solving and teamwork abilities.
        <br></br><br></br>
        Michael's journey from music to software engineering has been driven by a love 
        for continuous learning and a desire to challenge himself. Recently, 
        he has also embraced learning Japanese, a language he has been studying for 
        over a year. <br></br>
        He is now excited to take the next step in his career by seeking an 
        opportunity in Japan, where he can bring his skills, passion, 
        and adaptability to a new and vibrant environment.
        <br></br><br></br>

        I look forward to connecting with those who share my enthusiasm for technology and creativity.{' '}
        </Paragraph>
        <Box align="center" my={4}>
        <Link href="https://github.com/michaelgroves90" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<IoLogoGithub />}
          >
            @michaelgroves90
          </Button>
        </Link>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1990</BioYear>
          Born in London, England.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Began career as a Songwriter and touring Musician
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Began studying Software Engineering
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Working as a Software Engineer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
          Cinema, Music,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          ,{' '}Markets, Languages, Songwriting, Playing Piano and Guitar
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        Agile Processes · Test Driven Development · 
        CI/CD Pipeline and DevOps
        Project Planning: user stories, database structure and relationships, mock-ups
        Team Processes: pairing, mobbing, retros, check-ins. 
        Solid commitment to industry-standard best practices ensuring clean, 
        efficient, readable code (Single Responsibility, DRY).
        Domain Modelling
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Technologies
        </Heading>
          Scala · Java · JavaScript · TypeScript · HTML · CSS <br></br>
          Play · Spring <br></br>
          Kubernetes · Jenkins · Docker · PostgreSQL · Mongo <br></br>
          Mockito · ScalaMock · JUnit · <br></br>
          SBT · Maven · Gradle <br></br>
          IntelliJ IDEA · NVIM · VSCode · <br></br>
          Git · Gitlab <br></br>
      </Section>

      <Section>
        <Box align="center" my={4}>
          <Image
            src="/images/ckad.png"
            alt="CKAD Badge"
            width="100"
            height="100"
          />
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
