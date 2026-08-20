import Layout from '../components/layouts/article'

const Posts = () => (
  <Layout title="Notes">
    <p className="kicker">
      Writing <span className="jp">メモ</span>
    </p>
    <h1 className="page-title">
      Notes<em className="dot" aria-hidden="true">.</em>
    </h1>
    <p className="lede">No public notes yet. The work is in the services and the songs.</p>
  </Layout>
)

export default Posts
