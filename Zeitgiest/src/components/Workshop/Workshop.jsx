import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import p1 from "../../assets/1000255470-removebg-preview.png";
import { Link } from "react-router-dom";
function Workshop() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  return (
    <div
    id="Workshop"
      style={{
        backgroundColor: "black",
        background: "linear-gradient(to right, #000000 0%, #2c2b2b 100%)",
      }}
    >
      {/* Section */}
      <section
        className="w-100"
        style={{
          backgroundColor: "black",
          background: "linear-gradient(to right, #000000 0%, #2c2b2b 100%)",
        }}
      >
        <div className="text-white py-5">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              {/* Image Section */}
              <div
                className="col-md-6 order-1 order-md-2 d-flex justify-content-center"
                data-aos="fade-down"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={p1}
                  alt="Workshop Visual"
                  className="img-fluid"
                  style={{
                    maxWidth: "90%",
                    height: "auto",
                  }}
                />
              </div>

              {/* Text Section */}
              <div
                className="col-md-6 order-2 order-md-1 text-center text-md-start"
                data-aos="fade-up"
              >
                <h1 className="display-4 text-warning">TechFest</h1>
                <h2 className="h4 mb-3">GEN AI</h2>
                <p className="lead">
                  Join our GenAI Workshop to explore the exciting world of
                  Generative AI! Learn how cutting-edge technologies like GPT
                  and diffusion models create art, text, and more. Through
                  hands-on sessions, you'll build projects and gain practical
                  skills in AI tools and applications. Perfect for enthusiasts
                  and professionals eager to innovate with AI.
                </p>
                <a href="/workshop/genai" className="btn btn-outline-warning">
                  Explore Now
                </a>
              </div>
              
            </div>
          </div>
        </div>
        <div className="text-white py-5">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              {/* Image Section */}
              <div
                className="col-md-6 order-1 order-md-2 d-flex justify-content-center"
                data-aos="fade-down"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={p1}
                  alt="Workshop Visual"
                  className="img-fluid"
                  style={{
                    maxWidth: "90%",
                    height: "auto",
                  }}
                />
              </div>

              {/* Text Section */}
              <div
                className="col-md-6 order-2 order-md-1 text-center text-md-start"
                data-aos="fade-up"
              >
                <h1 className="display-4 text-warning">TechFest</h1>
                <h2 className="h4 mb-3">GEN AI</h2>
                <p className="lead">
                  Join our GenAI Workshop to explore the exciting world of
                  Generative AI! Learn how cutting-edge technologies like GPT
                  and diffusion models create art, text, and more. Through
                  hands-on sessions, you'll build projects and gain practical
                  skills in AI tools and applications. Perfect for enthusiasts
                  and professionals eager to innovate with AI.
                </p>
                <Link to="/workshop/GenAI" className="btn btn-outline-warning">
                  Explore Now
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Workshop;
