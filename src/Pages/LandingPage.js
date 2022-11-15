import "../LandingPage/LandingPage.css";

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
                  <a className="nav-link" href="#departments">
                    Departments
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#findUs">
                    Help{" "}
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#findUs">
                    Contact Us
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-sm btn-outline-primary rounded-pill order-1 order-lg-0 ms-lg-4"
                href="#!"
              >
                Sign Up
              </a>
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
                <a
                  className="btn btn-lg btn-primary rounded-pill"
                  href="#!"
                  role="button"
                >
                  DIAGNOSE YOURSELF
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5" id="departments">
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
                <div className="py-3">
                  <button
                    className="btn btn-lg btn-outline-primary rounded-pill"
                    type="submit"
                  >
                    Learn more{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-1">
          <div className="container">
            <div className="row">
              <div className="col-12 py-3">
                <div
                  className="bg-holder bg-size"
                  style={{
                    backgroundImage: "url(assets/img/gallery/blog-post.png)",
                    backgroundPosition: "top center",
                    backgroundSize: "contain",
                  }}
                ></div>

                <h1 className="text-center">RECENT BLOGPOSTS</h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className="bg-holder bg-size"
            style={{
              backgroundImage: "url(assets/img/gallery/dot-bg.png)",
              backgroundPosition: "top left",
              backgroundSize: "auto",
            }}
          ></div>

          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3 mb-4">
                <div className="card h-100 shadow card-span rounded-3">
                  <img
                    className="card-img-top rounded-top-3"
                    src="assets/img/gallery/covid-19.png"
                    alt="news"
                  />
                  <div className="card-body">
                    <span className="fs--1 text-primary me-3">Health</span>
                    <svg
                      className="bi bi-calendar2 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z">
                        {" "}
                      </path>
                    </svg>
                    <span className="fs--1 text-900">Nov 21, 2022</span>
                    <span className="fs--1"></span>
                    <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                      COVID-19: The Most Up-to-Date Information
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-4">
                <div className="card h-100 shadow card-span rounded-3">
                  <img
                    className="card-img-top rounded-top-3"
                    src="assets/img/gallery/laboratories.png"
                    alt="news"
                  />
                  <div className="card-body">
                    <span className="fs--1 text-primary me-3">Lifestyle</span>
                    <svg
                      className="bi bi-calendar2 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z">
                        {" "}
                      </path>
                    </svg>
                    <span className="fs--1 text-900">Nov 25, 2022</span>
                    <span className="fs--1"></span>
                    <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                      Importance of Accreditation for Laboratories
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-4">
                <div className="card h-100 shadow card-span rounded-3">
                  <img
                    className="card-img-top rounded-top-3"
                    src="assets/img/gallery/nicotine.png"
                    alt="news"
                  />
                  <div className="card-body">
                    <span className="fs--1 text-primary me-3">Health</span>
                    <svg
                      className="bi bi-calendar2 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z">
                        {" "}
                      </path>
                    </svg>
                    <span className="fs--1 text-900">Nov 28, 2022</span>
                    <span className="fs--1"></span>
                    <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                      The dangers of nicotine are addressed in depth
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-4">
                <div className="card h-100 shadow card-span rounded-3">
                  <img
                    className="card-img-top rounded-top-3"
                    src="assets/img/gallery/treatment.png"
                    alt="news"
                  />
                  <div className="card-body">
                    <span className="fs--1 text-primary me-3">Health</span>
                    <svg
                      className="bi bi-calendar2 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z">
                        {" "}
                      </path>
                    </svg>
                    <span className="fs--1 text-900">Nov 30, 2022</span>
                    <span className="fs--1"></span>
                    <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                      Treatment of patients with diabetes during COVID-19
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary">
          <div
            className="bg-holder bg-size"
            style={{
              backgroundImage: "url(assets/img/gallery/cta-bg.png)",
              backgroundPosition: "center right",
              marginTop: "-8.125rem",
              backgroundSize: "contain",
            }}
          ></div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="fw-bold text-light">Get an update every week</h2>
                <p className="text-soft-primary">
                  Livedoc was created in order to improve the patient
                  experience. <br />
                  Providing world-className tests, and a wide range of other
                  services.
                </p>
              </div>
              <div className="col-lg-6">
                <h5 className="mb-3 text-soft-primary">
                  SUBSCRIBE TO NEWSLETTER{" "}
                </h5>
                <form className="row gx-2 gy-2 align-items-center">
                  <div className="col">
                    <div className="input-group-icon">
                      <label
                        className="visually-hidden"
                        htmlFor="inputEmailCta"
                      >
                        Address
                      </label>
                      <input
                        className="form-control form-livedoc-control form-cta-control text-soft-primary newsletter-input "
                        id="inputEmailCta"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="d-grid gap-3 col-sm-auto">
                    <button
                      className="btn btn-lg btn-light rounded-3 px-5 py-3"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="py-0 bg-primary">
          <div className="container">
            <div className="row justify-content-md-between justify-content-evenly py-4">
              <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                <p className="fs--1 my-2 fw-bold text-200">
                  All rights Reserved &copy; Your Company, 2021
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
                    href="https://themewagon.com/"
                    target="_blank"
                  >
                    NERD HERD{" "}
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
