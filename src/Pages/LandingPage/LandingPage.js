import { Link } from "react-router-dom";
import "./LandingPage.css";

function Home() {
  return (
    <>
      <main className="main" id="top">
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block"
          data-navbar-on-scroll="data-navbar-on-scroll"
          style={{ backgroundColor: "white" }}
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/gallery/logo.png" width="118" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>
            <div
              className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
                <li className="nav-item px-2">
                  <a className="nav-link" aria-current="page" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#specialties">
                    Specialties
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#help">
                    Help{" "}
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#findUs">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="py-xxl-10 pb-0" id="home">
          <div
            className="bg-holder bg-size"
            style={{
              backgroundImage: "url(assets/img/gallery/hero-bg.png)",
              backgroundPosition: "top center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="container">
            <div className="row min-vh-xl-100 min-vh-xxl-25">
              <div className="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end">
                <img
                  className="pt-7 pt-md-0 w-100"
                  src="assets/img/gallery/hero.png"
                  alt="hero-header"
                />
              </div>
              <div className="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-6">
                <h1 className="fw-light font-base fs-6 fs-xxl-7">
                  We're <strong>determined </strong>for
                  <br />
                  your&nbsp;<strong>better life.</strong>
                </h1>
                <p className="fs-1 mb-5">You can get the care you need 24/7.</p>
                <Link
                  className="btn btn-lg btn-primary rounded-pill"
                  to="/home"
                  role="button"
                >
                  DIAGNOSE YOURSELF
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5" id="specialties">
          <div className="container">
            <div className="row">
              <div className="col-12 py-3">
                <div
                  className="bg-holder bg-size"
                  style={{
                    backgroundImage:
                      "url(assets/img/gallery/bg-departments.png)",
                    backgroundPosition: "top center",
                    backgroundSize: "contain",
                  }}
                ></div>

                <h1 className="text-center">AI BASED DIAGNOSIS OF </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="py-0">
          <div className="container">
            <div className="row py-5 align-items-center justify-content-center justify-content-lg-evenly">
              <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon-box text-center">
                    <a className="text-decoration-none" href="#!">
                      <img
                        className="mb-3 deparment-icon"
                        src="assets/img/icons/neurology.png"
                        alt="..."
                      />
                      <img
                        className="mb-3 deparment-icon-hover"
                        src="assets/img/icons/neurology.svg"
                        alt="..."
                      />
                      <p className="fs-1 fs-xxl-2 text-center">Neurology</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon-box text-center">
                    <a className="text-decoration-none" href="#!">
                      <img
                        className="mb-3 deparment-icon"
                        src="assets/img/icons/eye-care.png"
                        alt="..."
                      />
                      <img
                        className="mb-3 deparment-icon-hover"
                        src="assets/img/icons/eye-care.svg"
                        alt="..."
                      />
                      <p className="fs-1 fs-xxl-2 text-center">Eye care</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon-box text-center">
                    <a className="text-decoration-none" href="#!">
                      <img
                        className="mb-3 deparment-icon"
                        src="assets/img/icons/cardiac.png"
                        alt="..."
                      />
                      <img
                        className="mb-3 deparment-icon-hover"
                        src="assets/img/icons/cardiac.svg"
                        alt="..."
                      />
                      <p className="fs-1 fs-xxl-2 text-center">Cardiac care</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon-box text-center">
                    <a className="text-decoration-none" href="#!">
                      <img
                        className="mb-3 deparment-icon"
                        src="assets/img/icons/heart.png"
                        alt="..."
                      />
                      <img
                        className="mb-3 deparment-icon-hover"
                        src="assets/img/icons/heart.svg"
                        alt="..."
                      />
                      <p className="fs-1 fs-xxl-2 text-center">Heart care</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon-box text-center">
                    <a className="text-decoration-none" href="#!">
                      <img
                        className="mb-3 deparment-icon"
                        src="assets/img/icons/osteoporosis.png"
                        alt="..."
                      />
                      <img
                        className="mb-3 deparment-icon-hover"
                        src="assets/img/icons/osteoporosis.svg"
                        alt="..."
                      />
                      <p className="fs-1 fs-xxl-2 text-center">Osteoporosis</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon-box text-center">
                    <a className="text-decoration-none" href="#!">
                      <img
                        className="mb-3 deparment-icon"
                        src="assets/img/icons/ent.png"
                        alt="..."
                      />
                      <img
                        className="mb-3 deparment-icon-hover"
                        src="assets/img/icons/ent.svg"
                        alt="..."
                      />
                      <p className="fs-1 fs-xxl-2 text-center">ENT</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-0" id="about">
          <div className="container">
            <div className="row">
              <div className="col-12 py-3">
                <div
                  className="bg-holder bg-size"
                  style={{
                    backgroundImage: "url(assets/img/gallery/about-us.png)",
                    backgroundPosition: "top center",
                    backgroundSize: "contain",
                  }}
                ></div>
                <h1 className="text-center">ABOUT US</h1>
              </div>
            </div>
          </div>
        </section>
        <br></br>
        <br></br>
        <section className="py-5">
          <div
            className="bg-holder bg-size"
            style={{
              backgroundImage: "url(assets/img/gallery/about-bg.png)",
              backgroundPosition: "top center",
              backgroundSize: "contain",
            }}
          ></div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-1 mb-5 mb-lg-0">
                <img
                  className="rounded w-100"
                  src="assets/img/about-us-cover.jpg"
                  alt="..."
                />
              </div>
              <div className="col-md-6 text-center text-md-start">
                <h2 className="fw-bold mb-4">
                  We are developing a healthcare{" "}
                  <br className="d-none d-sm-block" />
                  system around you
                </h2>
                <p>
                  We think that everyone should have easy access to excellent{" "}
                  <br className="d-none d-sm-block" />
                  healthcare. Our aim is to make the procedure as simple as{" "}
                  <br className="d-none d-sm-block" />
                  possible for patients and to offer treatment no matter
                  <br className="d-none d-sm-block" />
                  where they are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Help section starts */}
        <section className="pb-0" id="help">
          <div className="container">
            <div className="row">
              <div className="col-12 py-3">
                {/* <div
                  className="bg-holder bg-size"
                  style={{
                    backgroundImage: "url(assets/img/gallery/about-us.png)",
                    backgroundPosition: "top center",
                    backgroundSize: "contain",
                  }}
                ></div> */}
                <h1 className="text-center">HOW TO USE?</h1>
              </div>
            </div>
          </div>
        </section>
        <br></br>
        <br></br>
        <section className="py-5">
          <div
            className="bg-holder bg-size"
            style={{
              backgroundImage: "url(assets/img/gallery/about-bg.png)",
              backgroundPosition: "top center",
              backgroundSize: "contain",
            }}
          ></div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-1 mb-5 mb-lg-0">
                {/* <img
                  className="rounded w-100"
                  src="assets/img/about-us-cover.jpg"
                  alt="..."
                /> */}
                <iframe
                  width="100%"
                  height="400px"
                  frameborder="0"
                  allowfullscreen
                  src="https://dubble.so/guides/workflow-with-livedocnetlifyapp-whebvwhmf7fiezdxzu82?embed=1"
                ></iframe>
              </div>
              <div className="col-md-6 text-center text-md-start">
                <h2 className="fw-bold mb-4">
                  Check this detailed guide <br className="d-none d-sm-block" />
                </h2>
                <p>
                  We've created a detailed guide on how to use this platform{" "}
                  <br className="d-none d-sm-block" />
                  to know about the ailment you are suffering from by{" "}
                  <br className="d-none d-sm-block" />
                  giving the symptoms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section Over */}
        <section className="py-0 bg-primary" id="findUs">
          <div className="container">
            <div className="row justify-content-md-between justify-content-evenly py-4">
              <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                <p className="fs--1 my-2 fw-bold text-200">
                  All rights Reserved &copy; LiveDoc, 2022
                </p>
              </div>
              <div className="col-12 col-sm-8 col-md-6">
                <p className="fs--1 my-2 text-center text-md-end text-200">
                  {" "}
                  Made with&nbsp;
                  <svg
                    className="bi bi-suit-heart-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="#F95C19"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                  </svg>
                  &nbsp;by&nbsp;
                  <a
                    className="fw-bold text-info"
                    href="https://github.com/thecurious1-sudo/LiveDoc"
                    target="_blank"
                  >
                    NERD HERD{" "}
                  </a>
                </p>
                <p className="fs--1 my-2 text-center text-md-end text-200">
                  <a
                    className="fw-bold text-info"
                    href="https://www.linkedin.com/in/vaibhav-jaiswal01/"
                    target="_blank"
                  >
                    Vaibhav Jaiswal{"   "}
                  </a>
                  &{"  "}
                  <a
                    className="fw-bold text-info"
                    href="https://www.linkedin.com/in/samarth-dengre-ba7682244/"
                    target="_blank"
                  >
                    Samarth Dengre{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script src="vendors/@popperjs/popper.min.js"></script>
      <script src="vendors/bootstrap/bootstrap.min.js"></script>
      <script src="vendors/is/is.min.js"></script>
      <script src="https://scripts.sirv.com/sirvjs/v3/sirv.js"></script>
      <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
      <script src="vendors/fontawesome/all.min.js"></script>
      <script src="assets/js/theme.js"></script>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fjalla+One&amp;family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100&amp;display=swap"
        rel="stylesheet"
      ></link>
    </>
  );
}

export default Home;
