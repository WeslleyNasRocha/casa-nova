import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      Created with <i className="fa fa-heart fa-xs"></i> and{' '}
      <i className="fa fa-coffee fa-xs"></i> by:{' '}
      <a target="_blank" href="http://github.com/weslleynasrocha">
        Weslley Rocha
      </a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
