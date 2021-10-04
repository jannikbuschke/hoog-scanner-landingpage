import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png"
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Make your Staff and Workspace Happy" />

    <div className={"page-header home"}>
      <h1>Make your Staff and Workspace Happy....</h1>
      <p>
        HiStaff gives your complex the opportunity to increase the percentage of
        happiness
        <br />
        and enjoyment of your staff and as a result, bring productivity to your
        workspace.
      </p>
      <img alt={"Dashboard"} src={featureImage} />
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Event"} src={thumbnailEvent} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Scan and track</h2>
                <p>
                  Einfach mit Mobilgerät QR Code scannen und per GPS Standort
                  merken (BILD: Handy/GMaps Point/Isometrisch)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Management/Übersicht</h2>
                <p>
                  Übersicht über alle aktuellen Gestellstandorte und
                  Verweildauer
                </p>
                <p>(BROWSER WEBANSICHT)</p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={thumbnailBoard} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"News"} src={thumbnailNews} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Integration über Schnittstelle</h2>
                <p>
                  Moderne API (Application programming interface) um in eigene
                  System zu integrieren
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>Sign up for free</h2>
          <p>
            Sign up and start increasing the productivity of your business with
            HiStaff.
          </p>
        </div>

        <div className={"button"}>
          <a href="https://app.histaff.io" target={"_blank"}>
            Get Started
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
