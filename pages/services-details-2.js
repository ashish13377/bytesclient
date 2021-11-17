import Footer2 from '../layout/footer-2';
import Header2 from '../layout/header-2';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ClientSlider from '../component/clientSlider';
import AllServices2 from '../element/all-services-2';
import Testimonial2 from '../element/testimonial-2';
import Link from 'next/link';


function ServicesDetails2() {
	const [isOpen, setOpen] = useState(false)
  return (
    <>
    <Header2/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Services Details 2</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Services Details 2</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services Details --> */}
		<section className="content-inner-2">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="dlab-media m-b30 rounded-md">
							<img src="images/blog/default/thum1.jpg" alt=""/>
						</div>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Web Development</h3>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							</div>
							<div className="row align-items-center m-b30">
								<div className="col-lg-6 m-b30">
									<h3>How You Start Web Development ?</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
									<ul className="list-arrow primary">
										<li>Lorem Ipsum is simply dummy text of the printing.</li>
										<li>Lorem Ipsum has been the industry's standard dummy text ever.</li>
										<li>when an unknown printer took a galley of type and scrambled.</li>
										<li>It has survived not only five centuries, but also the leap.</li>
										<li>Recently with desktop publishing software like Aldus PageMaker.</li>
										<li>Lorem Ipsum is simply dummy text of the printing industry.</li>
									</ul>
								</div>
								<div className="col-lg-6">
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
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"90%"}}></div>
										</div>
									</div>
									<div className="progress-bx overflow-hidden mb-3">
										<div className="progress-info">
											<span className="title">Development</span>
											<span className="progress-value">85%</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"85%"}}></div>
										</div>
									</div>
									<div className="progress-bx overflow-hidden">
										<div className="progress-info">
											<span className="title">Marketing</span>
											<span className="progress-value">70%</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"70%"}}></div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- Video --> */}
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
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Service --> */}
		<AllServices2/>
				
		{/* <!-- Testimonials --> */}
		<Testimonial2/>
		
		{/* <!-- Clients Logo --> */}
		<div className="content-inner-3 bg-white">
			<div className="container">
				<div className="clients-carousel owl-none m-b30 owl-carousel">
					<ClientSlider/>
				</div>
			</div>
		</div>
		
	</div>
     <Footer2/>
    </>
  )
}

export default ServicesDetails2;