import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Script from "react-load-script";
import Gifts from "../components/Gifts";

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />

        <div class="homepage">
          <div class="content">
            <div class="content__skew">
              <figure>
                <img src="http://sodiumhalogen.com/up_be/casey-horner-487085-iJrzaCAjf4.jpg" />
              </figure>
              <div class="content__header">
                <h1>
                  <img src="http://sodiumhalogen.com/up_be/croppedGiftED-SpyRgwcM5V.png" />
                </h1>
                <p>Learn to exercise your spiritual gifts in Christ.</p>
                <a href="#" class="main-button">
                  Serve Now
                </a>
              </div>
            </div>
          </div>

          <div class="about">
            <div class="about__skew">
              <div class="about__header">
                <h2>About</h2>
                <p>
                  GiftED educates Christians on how to exercise their spiritual
                  gifts given by the Holy Spirit, as described in Romans 12 and
                  1 Corinthians 12. Simply search for serving opportunities in
                  your community, and filter the results by spiritual gifts.
                  Whether you're equipped with the gift of prophesy, discernment
                  or any of the supernatural abilities given by Christ, GiftED
                  will find a match, allowing you to strengthen your faith and
                  live purposefully.
                </p>
                <p>
                  Uncertain about your spiritual gifts? Take an assessment{" "}
                  <a href="https://spiritualgiftstest.com/spiritual-gifts/">
                    here
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
