import Layout from '../components/layouts/article'
import Image from 'next/image'
import { projects, skills } from '../lib/content'

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

const Home = () => (
  <Layout>
    <section className="hero">
      <div>
        <p className="kicker">
          Software · Music <span className="jp">ソフトウェア・音楽</span>
        </p>
        <h1>
          <span>Michael</span>
          <span>
            Groves<em className="dot" aria-hidden="true">.</em>
          </span>
        </h1>
        <p className="lede">
          Application engineer for systems that cannot quietly fail. A decade of writing
          songs, then Java and Scala services for UK government.
        </p>
      </div>
      <div className="hero-side">
        <span className="tategaki" aria-hidden="true">
          ソフトウェアエンジニア
        </span>
        <figure className="portrait">
          <Image
            src="/images/michael3.jpg"
            alt="Portrait of Michael Groves"
            width={190}
            height={235}
          />
          <figcaption>
            <span>England, 1990</span>
            <em>→ JP</em>
          </figcaption>
        </figure>
      </div>
    </section>

    <div className="hero-meta">
      <span>
        <strong>Currently</strong> Scala · Java · Kubernetes
      </span>
      <span>CKAD certified</span>
      <span className="accent">Open to work in Japan</span>
    </div>

    <section className="section" id="about">
      <SectionHead title="About" index="01" jp="自己紹介" />
      <div className="split">
        <dl className="fact-list">
          <div>
            <dt>Born</dt>
            <dd>London, England</dd>
          </div>
          <div>
            <dt>Music</dt>
            <dd>Songwriter and touring musician, 2010 —</dd>
          </div>
          <div>
            <dt>Software</dt>
            <dd>Engineer since 2020, Capgemini since 2021</dd>
          </div>
          <div>
            <dt>Next</dt>
            <dd>Engineering work in Japan</dd>
          </div>
        </dl>
        <div className="prose">
          <p>
            With more than four years as a software engineer, I work across object-oriented
            and functional code, mostly <strong>well-tested microservices, APIs</strong>,
            and the pipelines that keep them honest.
          </p>
          <p>
            Before that I spent over a decade in music: writing, producing, and playing with
            other people in rooms that only work if everyone listens. That still shows up in
            how I pair, mentor, and ship.
          </p>
          <a
            className="ghost"
            href="https://github.com/michaelgroves90"
            target="_blank"
            rel="noreferrer"
          >
            GitHub @michaelgroves90
          </a>
        </div>
      </div>
      <div className="chip-row">
        {skills.map(skill => (
          <span className="chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>

    <section className="section" id="work">
      <SectionHead title="Selected work" index="02" jp="仕事" />
      <div className="work-grid">
        {projects.map(project => (
          <a className="work-card" key={project.no} href={project.href}>
            <span className="work-no">{project.no}</span>
            <span className="work-title">{project.title}</span>
            <p>{project.blurb}</p>
            <span className="work-meta">{project.meta}</span>
          </a>
        ))}
      </div>
    </section>
  </Layout>
)

export default Home
