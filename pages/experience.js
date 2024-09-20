import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Experience = () => (
  <Layout title="Experience">
    <Container maxW="container.md">
      <Heading as="h3" fontSize={20} mb={4}>
        Experience
      </Heading>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Software
        </Heading>
        <BioSection>
          <BioYear>2021 - Present Year</BioYear>
          Capgemini SE - Brighton, England
        </BioSection>
          Software Engineer
        <Paragraph>
        <br></br>
        I currently work as an Application and Systems Engineer for Capgemini on HMRC projects. Some of my achievements and responsibilities include:        <br></br>
        <br></br>
        • Building well tested microservices in both Java and Scala<br></br>
        • Used OpenApi to deliver RESTful APIs.<br></br>
        • Monitored and debugged vital government infrastructure outside of working hours.<br></br>
        • Helped design and build a complete redesign of said government infrastructure to improve it's
        efficiency, maintainability, and affordability<br></br>
        • Persued and encouraged TDD with every project and within every team.<br></br>
        • Defined and refined package structures for the individual microservices. <br></br>
        • Refactored code and made improvements continuously where necessary.<br></br>
        • Built and maintained a Gitlab and Jenkins CI/CD pipeline with multiple stages.<br></br>
        • Supported the projects through a full software development lifecycle.<br></br>
        • Worked with agile methodologies within my team.<br></br>
        • Acted as mentor to Junior Developers on various projects.<br></br>
        </Paragraph>
        <br></br>
        <Heading as="h3" variant="section-title">
          Finance
        </Heading>
        <BioSection>
          <BioYear>2019 - 2020</BioYear>
          McLean Delmo Bentleys - Melbourne, Australia
        </BioSection>
          Collections Executive
        <Paragraph>
          <br></br>
          • Journals and multi-currency inter-company journals.<br></br>
          • Debtor management for 11 company partners, writing databases and use of standard Excel macros, Vlookups and pivot tables.<br></br>
          • Using adequate measures to encourage payments before escalating to debt collections.<br></br>
          • CFO and partner relationship management.<br></br>
          • Preparing meaningful, accurate and timely monthly management reports.<br></br>
        </Paragraph>

        <br></br>
        <BioSection>
          <BioYear>2018 - 2019</BioYear>
          British and Irish Institute for Modern Music - Brighton, England
        </BioSection>
          Accounts Receivable and Student Finance Advisor
        <br></br>
        <br></br>
        <Heading as="h3" variant="section-title">
          Music
        </Heading>
        <BioSection>
          <BioYear>2015 - 2019</BioYear>
          Freelance Song-Writer and Producer
        </BioSection>
        <Paragraph>
        <br></br>
          • Sync contract with Altitude Music, London<br></br>
          • Paul Godfrey - Morcheeba<br></br>
          • He Manalishi<br></br>
          • Demob Happy<br></br>
          • The M-Theory<br></br>
          • Final Empire<br></br>
        </Paragraph>
          <br></br>
        <BioSection>
          <BioYear>2010 - 2017</BioYear>
          Audio Engineer and Session Musician
        </BioSection>
        <Paragraph>
        <br></br>
          • Yonaka<br></br>
          • Miamigo<br></br>
          • Kins<br></br>
          • The Confidentials<br></br>
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../components/chakra'
