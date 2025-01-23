import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/1000255470-removebg-preview.png";

function GenAi() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "black",
        background: "linear-gradient(to right, #000000 0%, #2c2b2b 100%)",
        color: "white",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Section (Image and Title) */}
          <div
            className="col-md-6 text-center"
            data-aos="fade-right"
            style={{ overflow: "hidden" }}
          >
            <img
              src={p1}
              alt="Workshop"
              className="img-fluid"
              style={{
                borderRadius: "15px",
                maxWidth: "90%",
                height: "auto",
              }}
            />
            <h1 className="display-5 text-warning mt-4">TechFest: GEN AI</h1>
            <p className="lead">
              Join our GenAI Workshop to explore the exciting world of
              Generative AI! Learn how cutting-edge technologies like GPT and
              diffusion models create art, text, and more.
            </p>
          </div>

          {/* Right Section (Details) */}
          <div
            className="col-md-6"
            data-aos="fade-left"
            style={{
              backgroundColor: "#1e1e1e",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h2 className="text-warning mb-4">Workshop Details</h2>
            {/* Rules and Regulations */}
            <div>
              <h4 className="text-light">Rules & Regulations:</h4>
              <ul className="list-unstyled text-white-50">
                <li>1. Registration is mandatory for all participants.</li>
                <li>2. Participants must adhere to the workshop timings.</li>
                <li>3. Use of personal laptops is encouraged.</li>
              </ul>
            </div>

            {/* Coordinators */}
            <div className="mt-4">
              <h4 className="text-light">Coordinators:</h4>
              <p className="text-white-50">
                <strong>John Doe:</strong> +91 9876543210 <br />
                <strong>Jane Smith:</strong> +91 8765432109
              </p>
            </div>

            {/* Fee Details */}
            <div className="mt-4">
              <h4 className="text-light">Fee Details:</h4>
              <p className="text-white-50">Registration Fee: ₹500</p>
              <p className="text-white-50">Team Registration Fee: ₹1000</p>
            </div>

            {/* Offers */}
            <div className="mt-4">
              <h4 className="text-light">Special Offers:</h4>
              <ul className="list-unstyled text-white-50">
                <li>1. Early bird discount: 10% off (valid until Jan 31st).</li>
                <li>2. Group registrations (5+ members) get a 20% discount.</li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-4">
              <a
                href="/register"
                className="btn btn-outline-warning btn-lg"
                data-aos="zoom-in"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenAi;
