import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span style={{ fontSize: 30 }}>
        <i className="icon fa-heart"></i>
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Weslley e Jéssica</h1>
        <p>
          Estamos começando uma nova fase em nossas vidas e
          <br />
          adoraríamos que você fizesse parte dela
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="#"
            onClick={() => {
              props.onOpenArticle('history')
            }}
          >
            História
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              props.onOpenArticle('party')
            }}
          >
            A Festa
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              props.onOpenArticle('gifts')
            }}
          >
            Presentinhos
          </a>
        </li>
        <li>
          <a
            href="#"
            id="rsvp"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            rsvp
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
