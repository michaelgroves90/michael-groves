import Layout from '../components/layouts/article'
import { otherJobs, softwareJobs } from '../lib/content'

const Job = ({ job }) => (
  <article className="job">
    <span className="job-when">{job.dates}</span>
    <div>
      <h3>{job.title}</h3>
      <p className="job-meta">
        {job.org} · {job.place}
      </p>
      {job.points.length > 0 && (
        <ul>
          {job.points.map(point => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  </article>
)

const SectionHead = ({ title, index, jp }) => (
  <div className="section-head">
    <h2>{title}</h2>
    <div className="section-rule" />
    <span className="section-index">
      {index}
      <span className="jp">{jp}</span>
    </span>
  </div>
)

const Experience = () => (
  <Layout title="Experience">
    <p className="kicker">
      Career <span className="jp">経歴</span>
    </p>
    <h1 className="page-title">
      Experience<em className="dot" aria-hidden="true">.</em>
    </h1>

    <section className="section" style={{ paddingTop: 0 }}>
      <SectionHead title="Software" index="A" jp="開発" />
      {softwareJobs.map(job => (
        <Job key={job.org} job={job} />
      ))}
    </section>

    <section className="section">
      <SectionHead title="Before that" index="B" jp="以前" />
      {otherJobs.map(job => (
        <Job key={`${job.org}-${job.dates}`} job={job} />
      ))}
    </section>
  </Layout>
)

export default Experience
