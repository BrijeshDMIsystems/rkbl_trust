import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/img2.jpeg'
import pic02 from '../images/img4.jpeg'
import pic03 from '../images/img3.jpeg'

class Main extends React.Component {
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
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            In 2009, Late Ramakrishna Mohapatra and  Santosh Nanda started assisting Deenabandhu Trust in Odisha for designing and implementing programs benefiting students, teachers, and schools. 
          </p>
          <p>
          RKBL Family Trust was established in 2019 with the objective to nurture business activities firmly rooted on Sattvik Living.

          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Mission</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Establish a sustainable organic farming community to serve as a model eco-friendly entity to be emulated by other value aligned communities. For this purpose, to carry on the following activities.
          </p>
      
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          <ul>
          <li>Advisory & Consulting Services</li>
          <li>Organic farming & Horticulture</li>
          <li>Yoga</li>
          <li>Nutrition product</li>
          <li>Dairy Farming & Care</li>
          <li>Green Products/Buildings</li>
          <li>CSR</li>
          <li>Retreat</li>
          <li>Ecotourism</li>
          <li>Research & Training</li>
          <li>Rural Education/Gurukul</li>
          <li>Herbs & Medicinal Plants</li>
          <li>Art & Handicrafts</li>
          <li>Rural Employment</li>
          <li>Waste Management</li>
          <li>Water Conservation</li>
          <li>Green Energy</li>
          <li>Soil Biotechnology</li>
          </ul>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
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