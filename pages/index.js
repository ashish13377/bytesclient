import { useEffect } from "react";
import AboutUs2 from "../element/aboutUs-2";
import Blog2 from "../element/blog-2";
import Clients2 from "../element/clients-2";
import Counter2 from "../element/counter2";
import OurServices2 from "../element/our-services-2";
import Pricing2 from "../element/pricing-2";
import Projects2 from "../element/Projects-2";
import Service2 from "../element/service-2";
import Slider2 from "../element/slider-2";
import Testimonial2 from "../element/testimonial-2";
import Footer2 from "../layout/footer-2";
import Header2 from "./../layout/header-2";
// import "../css/skin/skin-1.css";

function Index2() {
 
  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        <Slider2 />
        <Service2 />
        <AboutUs2 />
        <Counter2 />
        <OurServices2 />
        <Projects2 />
        <Pricing2 />
        <Testimonial2 />
        <Blog2 />
        <Clients2 />
      </div>
      <Footer2 />
    </>
  );
}

export default Index2;
