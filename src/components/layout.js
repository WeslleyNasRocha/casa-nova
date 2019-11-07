import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <>
      <Helmet title="Casa nova">
        <html lang="pt-br" />
      </Helmet>
      {content}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
