

import Footer2 from '../layout/footer-2';
import Header2 from '../layout/header-2';
import { useState } from "react";
import AllServices2 from '../element/all-services-2';
import Clients2 from '../element/clients-2';
import OurServices2 from '../element/our-services-2';
import Testimonial2 from '../element/testimonial-2';
import Link from 'next/link';


function Services2() {
    const [open, setOpen] = useState("p2")
  return (
    <>
    <Header2/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Services</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Services</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Service --> */}
		<AllServices2/>
		{/* <!-- About us --> */}
		<section className="content-inner-2 about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="images/about/pic1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">Our Skills</h6>
							<h2 className="title m-b20">We Have Best Experience In  All Our Business Services</h2>
						</div>
						
						<div className="progress-bx overflow-hidden mb-3">
							<div className="progress-info">
								<span className="title">SEO</span>
								<span className="progress-value">80%</span>
							</div>
							<div className="progress mb-3">
								<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"80%"}}></div>
							</div>
						</div>
						<div className="progress-bx overflow-hidden mb-3">
							<div className="progress-info">
								<span className="title">Designing</span>
								<span className="progress-value">90%</span>
							</div>
							<div className="progress mb-3">
								<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width": "90%"}}></div>
							</div>
						</div>
						<div className="progress-bx overflow-hidden mb-3">
							<div className="progress-info">
								<span className="title">Development</span>
								<span className="progress-value">85%</span>
							</div>
							<div className="progress mb-3">
								<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width": "85%"}}></div>
							</div>
						</div>
						<div className="progress-bx overflow-hidden">
							<div className="progress-info">
								<span className="title">Marketing</span>
								<span className="progress-value">70%</span>
							</div>
							<div className="progress mb-3">
								<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width": "70%"}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Service --> */}
		<OurServices2/>
		
		{/* <!-- Testimonials --> */}
		<Testimonial2/>
		
		{/* <!-- Clients Logo --> */}
		<Clients2/>
		
	</div>
  <Footer2/>
    </>
  )
}

export default Services2;