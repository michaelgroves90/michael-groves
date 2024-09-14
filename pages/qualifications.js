import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const Qualifications = () => (
  <Layout title="Wallpaper Packs">
    <Container maxW="container.md">
      <Heading as="h3" fontSize={20} mb={4}>
        Qualifications
      </Heading>
      <Heading as="h3" variant="section-title">
          In Progress
      </Heading>
      <BioSection>
        <BioYear>2024</BioYear>
          Japanese Language Proficiency Test - N4
      </BioSection>
        Examination in December 2024
        <br></br>
        <br></br>
      <Heading as="h3" variant="section-title">
          Completed
      </Heading>
      <Section>
        <BioSection>
          <BioYear>2024</BioYear>
          Certified Kubernetes Application Developer
        </BioSection>
        <br></br>
        <BioSection>
          <BioYear>2020</BioYear>
          Makers Academy - London, England
        </BioSection>
        Software Engineering
        <br></br>
        <br></br>
      <BioSection>
        <BioYear>2019</BioYear>
          Chartered Insurance Institute - London
      </BioSection>
          UK Financial Services, Regulation and Ethics - (93%)
      <br></br>
      <br></br>
      <BioSection>
        <BioYear>2010 - 2013</BioYear>
          University of Sussex - Brighton
      </BioSection>
          Music - 2.2
      <br></br>
      <br></br>
      </Section>
    </Container>
  </Layout>
)

export default Qualifications
export { getServerSideProps } from '../components/chakra'
