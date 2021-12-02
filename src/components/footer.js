import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = () => (
  <footer
    style={{
      padding:'1.5rem 3rem'
    }}
  >
    <span>客戶服務專線</span>
    <span>
      <i class="fas fa-phone-alt">Tel 0800-081-108</i>
      <i class="fas fa-mobile-alt">Cel (02)2171-1055</i>
    </span>
    <span>臺灣新光商業銀行股份有限公司版權所有</span>
    <span>© {new Date().getFullYear()} Shin Kong Bank Co., Ltd. All Rights Reserved</span>
    <Link to="/#" className='to-top'>
      <i class="fas fa-angle-up"></i>
    </Link>
  </footer>
)

export default Footer
