import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Qualifications = () => (
  <Layout title="Wallpaper Packs">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Qualifications
      </Heading>

      <Section>
        
    
      </Section>
    </Container>
  </Layout>
)

export default Qualifications
export { getServerSideProps } from '../components/chakra'
