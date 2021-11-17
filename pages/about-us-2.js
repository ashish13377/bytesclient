import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import ClientSlider from "../component/clientSlider";
import Blog2 from "../element/blog-2";
import Counter2 from "../element/counter2";
import AboutUs_2 from "../element/aboutUs-2"
import Header from "../layout/header-2";
import Footer2 from "./../layout/footer-2";
import Testimonial2 from "../element/testimonial-2";

function AboutUs2() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>About Us 2</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About --> */}
        <section className="content-inner-2">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h6 className="sub-title text-primary bgl-primary m-b15">
                OUR STEPS
              </h6>
              <h2 className="title">How It’s Work</h2>
            </div>
            <div
              className="row about-wraper-3 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <a
                      href="javascript:void(0);"
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-sketch"></i>
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Designing</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <a
                      href="javascript:void(0);"
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-vector"></i>
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Development</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <a
                      href="javascript:void(0);"
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-startup"></i>
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Launching</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- About us --> */}
        <AboutUs_2/>


        {/* <!-- Counters --> */}
        <Counter2 />

        {/* <!-- Video --> */}
        <section
          className="content-inner-2 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="video-bx style-1 overlay-black-light">
							<img src="images/video/pic1.jpg" alt=""/>
							<div className="video-btn">
							<a href="#" className="popup-youtube" onClick={()=> setOpen(true)}><i className="flaticon-play"></i></a>
								<h2 className="title">Watch US</h2>
							</div>
							<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UpolBSznWp0" onClose={() => setOpen(false)} />
						</div>
					</div>
				</div>
			</div>	
        </section>

        {/* <!-- Testimonials --> */}
        <Testimonial2/>
        {/*  */}

        {/* <!-- Blog --> */}
        <Blog2 />

        {/* <!-- Clients Logo --> */}
        <div className="content-inner-3 bg-white">
			<div className="container">
				<div className="clients-carousel owl-none owl-carousel m-b30">
					<ClientSlider />
				</div>
			</div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default AboutUs2;
