import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

let gray = '#333f48';
let red = '#da291c';

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.25rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="https://www.skfh.com.tw/"
          style={{
            color: `white`,
            fontSize: '1rem',
            letterSpacing: '3px',
            textDecoration: `none`,
          }}
        >
          <StaticImage
            src="../images/skb-logo.png"
            width={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="SKB LOGO"
            style={{ 
              marginRight: '1.5rem',
            }}
            className='logo'
          />
          {siteTitle}
        </Link>
      </h1>
      <Link
          to="https://www.facebook.com/share.php?u=https%3A%2F%2Fdogooderevent.com%2F2019skbwithyou"
          className='fab fa-facebook'
          style={{
            color: `white`,
            fontSize: '1.25rem',
            textDecoration: `none`,
          }}
        ></Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
