import PropTypes from 'prop-types'
import React from 'react'
import SectionList from 'react-virtualized-sectionlist'

import historyPic from '../images/history.png'

import gifts from '../data/gifts.json'

class Main extends React.Component {
  handleGiftClick = event => {
    event.target.classList.toggle('active')
    var content = event.target.nextElementSibling
    if (content.style.display === 'block') {
      content.style.display = 'none'
    } else {
      content.style.display = 'block'
    }
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="history"
          className={`${this.props.article === 'history' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Nossa história</h2>
          <span className="image main">
            <img className="mid-blur" src={historyPic} alt="" />
          </span>
          <blockquote className="her">
            Talvez ele não se lembre de muitas coisas, mas me lembro como se
            fosse ontem e jamais me esquecerei daquele dia.
          </blockquote>
          <blockquote className="him">
            Como poderia me esquecer aquele dia, o dia que eu achei que ia ser
            sequestrado, mas quem acabou sequestrado foi o coração dela{' '}
            <span className="fas fa-grin-tongue-wink" />
          </blockquote>
          <blockquote className="her">
            Quando eu o vi pela primeira vez, não tive dúvidas que passaria o
            resto da minha vida ao lado dele. Mas como eu viveria com aquele que
            logo no primeiro encontro, pediu uma pepsi e eu um chopp? Como
            contaria a minha família que eu havia encontrado o homem da minha
            vida e que ele odiava cerveja? Logo eu, filha de cervejeiro com um
            homem que não gosta de cerveja. Em contrapartida, ele todo otaku
            tentava me convencer que anime e videogames era algo super legal.
            Ele recém formado em exatas e eu de humanas. Um casal típico da
            frase: "os opostos se atraem”.
          </blockquote>
          <blockquote className="him">
            Anime é legal tá! <span className="fas fa-angry" />
          </blockquote>
          <blockquote className="her">
            Hoje somos um casal muito além de nós mesmos e com isso, assumimos
            um aluguel, duas meninas e o financiamento da nossa casa nova. Ele
            me ensinou a gostar de Naruto e eu o ensinei a apreciar uma boa
            cerveja. Prometemos um ao outro, companheirismo, respeito, amor e
            abraços quentinhos. Mas acima de tudo, prometemos fazer de nossas
            vidas algo leve e apaixonante como a música{' '}
            <a target="_blank" href="https://youtu.be/nyaLIgXm5l0?t=31">
              “La Vie En Rose”
            </a>
            .
          </blockquote>
          <blockquote className="him">
            Ou as vezes alegre (e um tanto quanto bebâdo rsrs) como{' '}
            <a target="_blank" href="https://youtu.be/1edHjgZnnaw">
              "Can't Take My Eyes Off You"
            </a>
            .
          </blockquote>
          <center>
            <span className="fa fa-heart fa-3x" style={{ color: '#ed4949' }} />
          </center>
          {close}
        </article>

        <article
          id="party"
          className={`${this.props.article === 'party' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">A receita da festa</h2>
          <span className="image main">
            <img
              src="https://media.giphy.com/media/YTbZzCkRQCEJa/source.gif"
              alt=""
            />
          </span>
          <h3>INGREDIENTES</h3>

          <ul>
            <li>
              <p>
                <strong>1 Data:</strong> 30 de novembro de 2019
              </p>
            </li>
            <li>
              <p>
                <strong>1 Horário:</strong> 13h00
              </p>
            </li>
            <li>
              <p>
                <strong>1 Local:</strong> Chácara dos pais da Jéssica
              </p>
            </li>
            <li>
              <p>
                <strong>1 Endereço: </strong>
                <a target="_blank" href="https://goo.gl/maps/f3ZYZ5eZSFgPuxtP9">
                  Rua Santos Smaniott, 328, Quinhões - Monte Mor/SP
                </a>
              </p>
            </li>
          </ul>
          <h3>PREPARO</h3>
          <p>
            Junte tudo isso, acrescente amigos e polvilhe com amor e alegria!
          </p>
          <p>
            <strong>OBSERVAÇÃO:</strong> A receita não vai dar certo sem você!
          </p>
          {close}
        </article>

        <article
          id="gifts"
          className={`${this.props.article === 'gifts' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">
            Presentinhos{' '}
            <span>
              <i className="far fa-grimace "></i>
            </span>
          </h2>
          <div></div>
          <span className="image main">
            <img src="https://media.giphy.com/media/kKo2x2QSWMNfW/source.gif" />
          </span>
          <p>
            Chegamos na parte boa disso tudo, não é obrigatório levar nada mas{' '}
            <span className="cancelled">
              se não levar é melhor nem aparecer
            </span>{' '}
            ficariamos muito agradecidos por qualquer um desses presentes:
          </p>
          {gifts.map(gift => (
            <>
              <h3
                onClick={this.handleGiftClick}
                key={gift.title}
                className="gift-list-title"
              >
                {gift.title} <i className="fas fa-chevron-down"></i>
              </h3>
              <div class="gift-list-content">
                <ul>
                  {gift.data.map(item => (
                    <li
                      className={`${item.reserved && 'reserved'}`}
                      key={item.title}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))}

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contato</h2>

          <p>
            Nos mande uma mensagem, pode ser qualquer coisa, qualquer coisa
            mesmo, <span className="cancelled">somos um pouco carentes</span>{' '}
            pode ser dizendo que podemos te ver lá, pode ser que não vai dar pra
            ir, pode dizer que a Jéssica exagerou na{' '}
            <i>
              "<b>listinha</b>"
            </i>{' '}
            dela
          </p>
          <span className="image main">
            <img src="https://media.giphy.com/media/Qw4X3Fsf0N1VqFFUiBi/source.gif" />
          </span>
          <form action="https://formspree.io/myyyyyev" method="POST">
            <div className="field half first">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Messagem</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="ALO" className="special" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
