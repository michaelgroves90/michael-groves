import NextLink from 'next/link'

const NotFound = () => {
  return (
    <div className="page not-found">
      <p className="kicker">
        404 <span className="jp">見つかりません</span>
      </p>
      <h1 className="page-title">
        Not found<em className="dot" aria-hidden="true">.</em>
      </h1>
      <p className="lede">Nothing lives at this address.</p>
      <NextLink className="ghost" href="/">
        Return home
      </NextLink>
    </div>
  )
}

export default NotFound
