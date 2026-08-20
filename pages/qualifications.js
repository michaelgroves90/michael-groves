import Layout from '../components/layouts/article'
import Image from 'next/image'
import { qualifications } from '../lib/content'

const Qualifications = () => (
  <Layout title="Qualifications">
    <p className="kicker">
      Paperwork <span className="jp">資格</span>
    </p>
    <h1 className="page-title">
      Qualifications<em className="dot" aria-hidden="true">.</em>
    </h1>
    <div>
      {qualifications.map(item => (
        <article className="qual" key={`${item.year}-${item.title}`}>
          <time>{item.year}</time>
          <strong>{item.title}</strong>
          <span className="qual-detail">{item.detail}</span>
        </article>
      ))}
    </div>
    <div className="badge-row">
      <Image src="/images/ckad.png" alt="CKAD certification badge" width={80} height={80} />
      <p>
        Certified Kubernetes Application Developer, clusters as an instrument, not a
        mystery.
      </p>
    </div>
  </Layout>
)

export default Qualifications
