import video from "../assets/real.mp4";
import vid2 from "../assets/vid2.mp4";
import Plans from "./Plans";
import customer from "../assets/customer.jpg";
import Faq from "./faq";
import home from "../assets/pexels-pixabay-164522.jpg";

const About = () => {
  return (
    <div>
      <section className="intro">
        <div className="container intro-container">
          <div>
            <h1>Looking to make investment in Real-Estate</h1>
            <p>
              Here at Chi-Homes we take you from zero to hero, walking your
              through the stairs of financial breakthrough while considering
              your Risk-tolerance
            </p>
            <button className="btn btn-black">Get started</button>
          </div>
          <img
            src={home}
            alt="home"
            style={{ height: "80%", width: "100%", borderRadius: "20px" }}
          />
        </div>
      </section>
      <section className="vid container">
        {" "}
        <video src={video} controls="controls" width="100%" height="100%" />
      </section>
      <section className="goals">
        <div className="container goals-container">
          <h1>Services</h1>
          <div>
            <div>
              <h3>Buy Affordable Homes</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem dolore similique minima quas odit distinctio officiis et
                labore dolores ex.
              </p>
            </div>
            <div>
              <h3>Lease your Home</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem dolore similique minima quas odit distinctio officiis et
                labore dolores ex.
              </p>
            </div>
            <div>
              <h3>Invest in RealEstate</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem dolore similique minima quas odit distinctio officiis et
                labore dolores ex.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="confidence">
        <div className="container con-container">
          <video src={vid2} height="100%" width="100%" controls="controls" />
          <div>
            <div>
              <h3>withstand market highs and lows</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem dolore similique minima quas odit distinctio officiis et
                labore dolores ex.
              </p>
            </div>
            <div>
              <h3>Make the most of your money</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem dolore similique minima quas odit distinctio officiis et
                labore dolores ex.
              </p>
            </div>
            <div>
              <h3>Trusted Advice Anytime</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem dolore similique minima quas odit distinctio officiis et
                labore dolores ex.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Plans />
      <section className="help">
        <div className="container help-container">
          <img
            src={customer}
            style={{ height: "90%", width: "100%", borderRadius: "20px" }}
            alt="customer"
          />
          <div>
            <h2>
              Professionally managed portfolios and investment plans, tailored
              to you
            </h2>
            <div>
              <div>
                <h4>Relaible and diversified</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem dolore similique minima quas odit distinctio officiis
                  et labore dolores ex.
                </p>
              </div>
              <div>
                <h4>Made for Modern investors</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem dolore similique minima quas odit distinctio officiis
                  et labore dolores ex.
                </p>
              </div>
              <div>
                <h4>Supported by experts</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem dolore similique minima quas odit distinctio officiis
                  et labore dolores ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-team">
        <div className="container team-container">
          <div>
            <h1>Getting Started is easy</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
              facilis corporis pariatur cum! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Distinctio, aut.
            </p>
            <button className="btn btn-black">Contact our team</button>
          </div>
        </div>
      </section>
      <section className="quote">
        <div className="container quote-container">
          <h3>
            "The best way to achieve your financial goals is by investing in
            low-cost, diversified portfolios of risk-appropriate assets. Our
            goal is to set you up for reliable returns across a range of market
            conditions" <span>~Emmanuel</span>
          </h3>
        </div>
      </section>
      <section className="faqs">
        <div className="container faqs-container">
          <h2>FAQ</h2>
          <Faq />
        </div>
      </section>
    </div>
  );
};

export default About;
