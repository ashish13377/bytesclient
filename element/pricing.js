
import { useState } from "react";
function Pricing() {
    const [open, setOpen] = useState("p2")
  return (
    <>
      <section className="content-inner">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-5 col-lg-4 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1 mb-4">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Pricing</h6>
							<h2 className="title m-b20">Most Prominent Plans To Offer You Great Value</h2>
							<p>Mauris eleifend ipsum dolor, sit amet elementum tortor mattis interdum. Praesent ut lobortis purus. Phasellus libero orci, accumsan luctus metus et, pulvinar mollis orci.</p>
							<p>Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.</p>
						</div>
					</div>
					<div className="col-xl-7 col-lg-8 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="pricingtable-row pricingtable-wraper-1">
							<div className={`${open === "p1" ? "pricingtable-wrapper style-1 m-b30 active" : "pricingtable-wrapper style-1 m-b30"}`} onMouseOver={() => setOpen("p1")}>
								<div className="pricingtable-inner">
									<div className="pricingtable-title">
										<h3>Basic Plan</h3>
									</div>
									<div className="pricingtable-price"> 
										<h2 className="pricingtable-bx">$49</h2>
									</div>
									<ul className="pricingtable-features">
										<li>Graphic Design </li>
										<li>Web Design</li>
										<li>UI/UX</li>
										<li>HTML/CSS</li>
										<li>SEO Marketing</li>
										<li>Business Analysis</li>
									</ul>
									<div className="pricingtable-footer"> 
										<a href="/pricing-table-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Now</a> 
									</div>
								</div>
							</div>
							<div className={`${open === "p2" ? "pricingtable-wrapper style-1 m-b30 center active" : "pricingtable-wrapper center style-1 m-b30"}`} onMouseOver={() => setOpen("p2")}>
								<div className="pricingtable-inner">
									<div className="pricingtable-title">
										<h3>Standart Plan</h3>
									</div>
									<div className="pricingtable-price"> 
										<h2 className="pricingtable-bx">$99</h2>
									</div>
									<ul className="pricingtable-features">
										<li>Graphic Design </li>
										<li>Web Design</li>
										<li>UI/UX</li>
										<li>HTML/CSS</li>
										<li>SEO Marketing</li>
										<li>Business Analysis</li>
									</ul>
									<div className="pricingtable-footer"> 
										<a href="/pricing-table-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Now</a> 
									</div>
								</div>
							</div>
							<div className={`${open === "p3" ? "pricingtable-wrapper style-1 m-b30 active" : "pricingtable-wrapper style-1 m-b30"}`} onMouseOver={() => setOpen("p3")}>
								<div className="pricingtable-inner">
									<div className="pricingtable-title">
										<h3>Premium Plan</h3>
									</div>
									<div className="pricingtable-price"> 
										<h2 className="pricingtable-bx">$149</h2>
									</div>
									<ul className="pricingtable-features">
										<li>Graphic Design </li>
										<li>Web Design</li>
										<li>UI/UX</li>
										<li>HTML/CSS</li>
										<li>SEO Marketing</li>
										<li>Business Analysis</li>
									</ul>
									<div className="pricingtable-footer"> 
										<a href="/pricing-table-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Now</a> 
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Pricing;