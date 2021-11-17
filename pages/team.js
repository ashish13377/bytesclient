import Link from "next/link";
import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";

function Team2() {
  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Our Team</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Team
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Team --> */}
        <section
          className="content-inner"
          style={{
            backgroundImage: "url(images/background/bg18.png)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a href="javascript:void(0);">
                      <img src="images/team/pic1.jpg" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="fa fa-facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            className="fa fa-instagram"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://ads.twitter.com/login"
                            className="fa fa-twitter"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        Steve Johnson
                      </h3>
                      <span className="dlab-position">
                        Chief Exicutive Officer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a href="javascript:void(0);">
                      <img src="images/team/pic2.jpg" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="fa fa-facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            className="fa fa-instagram"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://ads.twitter.com/login"
                            className="fa fa-twitter"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        Olivia Jackson
                      </h3>
                      <span className="dlab-position">
                        Chief Exicutive Officer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a href="javascript:void(0);">
                      <img src="images/team/pic3.jpg" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="fa fa-facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            className="fa fa-instagram"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://ads.twitter.com/login"
                            className="fa fa-twitter"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                       Tamerlan Aziev
                      </h3>
                      <span className="dlab-position">
                        Chief Exicutive Officer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a href="javascript:void(0);">
                      <img src="images/team/pic4.jpg" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="fa fa-facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            className="fa fa-instagram"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://ads.twitter.com/login"
                            className="fa fa-twitter"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                       John Kenny
                      </h3>
                      <span className="dlab-position">
                        Chief Exicutive Officer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a href="javascript:void(0);">
                      <img src="images/team/pic5.jpg" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="fa fa-facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            className="fa fa-instagram"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://ads.twitter.com/login"
                            className="fa fa-twitter"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        Silvia Perry
                      </h3>
                      <span className="dlab-position">
                        Chief Exicutive Officer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a href="javascript:void(0);">
                      <img src="images/team/pic6.jpg" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="fa fa-facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            className="fa fa-instagram"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://ads.twitter.com/login"
                            className="fa fa-twitter"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        David Schwimmer
                      </h3>
                      <span className="dlab-position">
                        Chief Exicutive Officer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.7s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a href="javascript:void(0);">
                      <img src="images/team/pic7.jpg" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="fa fa-facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            className="fa fa-instagram"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://ads.twitter.com/login"
                            className="fa fa-twitter"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        Titian Silva
                      </h3>
                      <span className="dlab-position">
                        Chief Exicutive Officer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a href="javascript:void(0);">
                      <img src="images/team/pic8.jpg" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="fa fa-facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            className="fa fa-instagram"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://ads.twitter.com/login"
                            className="fa fa-twitter"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        Sakura Chen
                      </h3>
                      <span className="dlab-position">
                        Chief Exicutive Officer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.9s"
              >
                <div className="dlab-team style-3 m-b30">
                  <div className="dlab-media">
                    <a href="javascript:void(0);">
                      <img src="images/team/pic9.jpg" alt="" />
                    </a>
                    <div className="overlay-content">
                      <ul className="dlab-social-icon">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="fa fa-facebook"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            className="fa fa-instagram"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://ads.twitter.com/login"
                            className="fa fa-twitter"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h3 className="dlab-name">
                        Neo Jackson
                      </h3>
                      <span className="dlab-position">
                        Chief Exicutive Officer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer2 />
    </>
  );
}

export default Team2;
