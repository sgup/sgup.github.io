import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import "./mystyles.scss"
import fitloopScreenshot from "../images/fitloop-screenshot.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <p className="is-size-3 has-text-centered ">
            Hi, I’m{" "}
            <b className="has-underline underline-green">Shridhar Gupta</b>, a
            UX-focused Web & Mobile Engineer from San Francisco, California. I
            travel and work remotely while building products I’m passionate
            about.
          </p>

          <section class="section">
            <div className="columns is-multiline has-text-centered">
              <div className="column is-one-third">
                <span class="icon is-medium">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>{" "}
                <a href="mailto:hey@shridhargupta.com">
                  <b className="is-link is-size-4 has-underline underline-blue">
                    contact
                  </b>
                </a>
              </div>

              <div className="column is-one-third">
                <span class="icon is-medium">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>{" "}
                <a href="https://www.linkedin.com/in/shridhargupta/">
                  <b className="is-link is-size-4 has-underline underline-blue">
                    resumé
                  </b>
                </a>
              </div>

              <div className="column is-one-third">
                <span class="icon is-medium">
                  <FontAwesomeIcon icon={faGithub} />
                </span>{" "}
                <a href="https://github.com/sgup/">
                  <b className="is-link is-size-4 has-underline underline-blue">
                    code
                  </b>
                </a>
              </div>

              <div className="column is-one-third">
                <span class="icon is-medium">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>{" "}
                <a href="https://twitter.com/shridhargupta">
                  <b className="is-link is-size-4 has-underline underline-blue">
                    say hi
                  </b>
                </a>
              </div>

              <div className="column is-one-third">
                <span class="icon is-medium">
                  <FontAwesomeIcon icon={faCamera} />
                </span>{" "}
                <a href="http://shridhartakesphotos.com">
                  <b className="is-link is-size-4 has-underline underline-blue">
                    photography
                  </b>
                </a>
              </div>

              <div className="column is-one-third">
                <span class="icon is-medium">
                  <FontAwesomeIcon icon={faInstagram} />
                </span>{" "}
                <a href="https://instagram.com/shridhartakesphotos">
                  <b className="is-link is-size-4 has-underline underline-blue">
                    follow
                  </b>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <hr />

    <section class="section">
      <div className="container">
        <h2 className="title">
          Fitloop <span className="tag is-primary">Solo Maker</span>
        </h2>
        <h3 className="subtitle">
          A comprehensive calisthenics training platform &mdash; workout
          tracking, routines, videos, and social features built in.
        </h3>
        <div className="tags">
          <span className="tag is-dark is-medium">Meteor</span>
          <span className="tag is-dark is-medium">Node</span>
          <span className="tag is-dark is-medium">Apollo</span>
          <span className="tag is-dark is-medium">GraphQL</span>
          <span className="tag is-dark is-medium">React</span>
          <span className="tag is-dark is-medium">MongoDB</span>
          <span className="tag is-dark is-medium">React Native</span>
          <span className="tag is-dark is-medium">Bootstrap 4</span>
        </div>
        <a href="https://fitloop.co">
          <img src={fitloopScreenshot} className="screenshot" />
        </a>
      </div>
    </section>

    {/*<section class="section">
      <div className="container has-text-centered">
        <h2 className="is-size-3">Technology Experience</h2>
        <p className="is-size-4">
          ES10, React, React Native, Node.js, MongoDB, Apollo/GraphQL
        </p>
        <p>
          <b>Also:</b> Ruby on Rails, Postgres, Meteor, Express, Yarn, REST,
          SASS, Styled Components & more.
        </p>
      </div>
    </section>*/}
  </Layout>
)

export default IndexPage
