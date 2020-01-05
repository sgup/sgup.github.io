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

    <section>
      <div className="jumbotron container">
        <div class="columns">

          <div class="column image-column is-1 is-offset-1">
            <div style={{paddingBottom: '20px'}}>
              <figure className="image is-128x128 is-inline-block">
                <img className="is-rounded" src="https://shridharstorage.s3.amazonaws.com/profilepics/shridhargupta-cropped.jpeg" />
              </figure>
            </div>
          </div>

          <div class="column is-8 is-offset-1">
            <p className="title is-size-2 is-size-3-mobile">
              Hi, I’m{" "}
              <b>
                <a
                  href="https://twitter.com/shridhargupta"
                  className="is-link has-underline underline-green"
                >
                  Shridhar Gupta
                </a>
              </b>.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              I build modern Web & Mobile Apps with a focus on great UX. I'm currently making{' '}
              <b>
                <a
                  href="https://fitloop.app"
                  className="is-link has-underline underline-purple"
                >
                  Fitloop
                </a>
              </b> and{' '}
              <b>
                <a
                  href="https://streetgyms.com"
                  className="is-link has-underline underline-purple"
                >
                  StreetGyms
                </a>
              </b> and <a href="mailto:hey@shridhargupta.com" className="is-link has-underline underline-blue"><b>available for freelance work</b></a>.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section class="section quotes">
      <div class="columns is-multiline">
        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <p class="title">
                “Shridhar was a <b>pleasure to work with</b> and was articulate in his discussions of ideas and projects. <b>He is a fast learner</b>, who is always improving his abilities and sharping his skills. I would work with him again.”
              </p>
              <p class="subtitle">
                <figure className="image is-48x48 is-inline-block">
                  <img className="is-rounded" src="https://media.licdn.com/dms/image/C4E03AQE3NN8uMmo47w/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=WKxnrMd4TGMry8e1msG0cyFDmht6d63XfZSa4rRqfuY" />
                </figure>
                <div className="info">
                  <a href="https://www.linkedin.com/in/curtishumphrey/" target="_blank"><b>Curtis Humphrey, Ph.D.</b></a>
                  <span>Sr. Software Architect at <a href="https://dataquest.io" target="_blank">Dataquest Labs</a></span>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <p class="title">
                “Shridhar was instrumental in a successful re-design […]. Shridhar’s excellent communication and UI expertise helped improve upon the user experience of the site. Shridhar <b>consistently delivered quality work on-time and to spec.</b>”
              </p>
              <p class="subtitle">
                <figure className="image is-48x48 is-inline-block">
                  <img className="is-rounded" src="https://media.licdn.com/dms/image/C4E03AQHgFIHQ3x0Zgw/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=S7g5ZNbM9sUNTRHM0ntby55CbTPpEvjTgbwqnJ0lAqg" />
                </figure>
                <div className="info">
                  <a href="https://www.linkedin.com/in/benjaminleung/" target="_blank"><b>Benjamin Leung</b></a>
                  <span>Operations & Tech PM at <a href="https://semperllc.com/" target="_blank">Semper LLC</a></span>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <p class="title">
                “I couldn’t speak more highly of his work ethic and ability to deliver on results. He is collaborative and easy to work with […] he led various projects from start to completion that <b>made a major impact on our company’s core metrics.</b>”
              </p>
              <p class="subtitle">
                <figure className="image is-48x48 is-inline-block">
                  <img className="is-rounded" src="https://media.licdn.com/dms/image/C4E03AQG_5cQjzpwUgA/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=hhZAkLdFzAmvblL4p7gu3qaDsi7thaRaP4ni4616kF8" />
                </figure>
                <div className="info">
                  <a href="https://www.linkedin.com/in/joshsperling/" target="_blank"><b>Josh Sperling</b></a>
                  <span>Market Manager at <a href="https://couchsurfing.com" target="_blank">Couchsurfing</a></span>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <p class="title">
                “I’ve been consistently impressed by his <b>attention to detail</b>, his eagerness and willingness to learn new skills, his <b>empathy towards users</b>, and his dedication to incorporating the company's mission and goals into every project he's assigned. I'd be lucky to work alongside him again!”
              </p>
              <p class="subtitle">
                <figure className="image is-48x48 is-inline-block">
                  <img className="is-rounded" src="https://media.licdn.com/dms/image/C5603AQGdKaOrTXnwWQ/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=WYi65LagZBARXI3r90TQ1My_Fuaqf1LrtbkRyUJ7wRc" />
                </figure>
                <div className="info">
                  <a href="https://www.linkedin.com/in/allishea/" target="_blank"><b>Alli Shea</b></a>
                  <span>Director of Marketing at <a href="https://couchsurfing.com" target="_blank">Couchsurfing</a></span>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <p class="title">
                “Shridhar helped us build an internal tool to manage customer data. He's a great collaborator -- both creatively, and in communicating progress throughout a project. <b>Working with him was straightforward and efficient</b>, and his joining us in the office made everything go super smoothly. I'd definitely work with him again!”
              </p>
              <p class="subtitle">
                <figure className="image is-48x48 is-inline-block">
                  <img className="is-rounded" src="https://media.licdn.com/dms/image/C4E03AQFeJQCxXqblvw/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=9fxMAotVgtCDQVAKq3f0W-rWOq2gYAxcp8zZBnv6LfU" />
                </figure>
                <div className="info">
                  <a href="https://www.linkedin.com/in/lizcormack/" target="_blank"><b>Liz Cormack</b></a>
                  <span>UX Director at <a href="https://www.linkedin.com/company/grovegrown/about/" target="_blank">Grove Labs</a></span>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <p class="title">
                “Shridhar has impressed me with his <b>ability to take feedback, ask questions, and improve</b> his process over time. We’ve seen a steady increase in his code quality and tests over time. <b>He is a team player</b>, who was well liked by all members of the Dataquest team. While at Dataquest he worked mostly with React and GraphQL.”
              </p>
              <p class="subtitle">
                <figure className="image is-48x48 is-inline-block">
                  <img className="is-rounded" src="https://i0.wp.com/softwareengineeringdaily.com/wp-content/uploads/2016/01/srini-kadamati.jpg?w=175&ssl=1" />
                </figure>
                <div className="info">
                  <a href="https://www.linkedin.com/in/srinivasakadamati/" target="_blank"><b>Srini Kadamati</b></a>
                  <span>Product at <a href="https://dataquest.io/" target="_blank">Dataquest Labs</a></span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="section">

      <div className="has-text-centered">
        <h2 className="section-title is-size-3 has-underline underline-purple">Work</h2>
      </div>


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

    <section class="section">
      <div className="container has-text-centered">
        <h2 className="section-title is-size-4 has-underline underline-purple">Technology Experience</h2>
        <p className="is-size-4">
          ES10, React, React Native, Node.js, MongoDB, Apollo/GraphQL
        </p>
        <p>
          <b>Also:</b> Ruby on Rails, Postgres, Meteor, Express, Yarn, REST,
          SASS, Styled Components & more.
        </p>
      </div>
    </section>

    <section class="section">
      <div className="columns is-multiline has-text-centered">
        <div className="column is-one-third">
          <span class="icon is-medium">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>{" "}
          <a href="mailto:hey@shridhargupta.com">
            <b className="is-link is-size-4 has-underline underline-blue">
              get in touch
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
  </Layout>
)

export default IndexPage
