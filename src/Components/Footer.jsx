import React from "react";

function Footer() {
  return (
    <>
      <div className="space"></div>
      <div>
        <footer className="bg-primary" style={{}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div
                  style={{ color: "#ffffff" }}
                  className="wow fadeInUp footer-copyright"
                >
                  <p style={{ paddingTop: "2vw" }}>
                    Made in India <br />
                    Copyright &copy; Online Quiz 2020{" "}
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
