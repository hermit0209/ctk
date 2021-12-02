import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Card = ({ cardSrcURL, cardTitle, cardExcrept }) => (
  <div className="card">
    <Link to="/page-2/">
        <StaticImage
        src="../images/skb-banner-fake.png"
        // width={'100%'}
        className='card-img'
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `0.25rem` }}
        />
    </Link>
    <h3>{cardTitle}</h3>
    <p>{cardExcrept}</p>
    <Link to="/page-2/" className='more'>
        閱讀更多
    </Link>
  </div>
)
export default Card