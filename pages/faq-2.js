import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";
import Accordion_sm from "../element/accordion_sm";
import Link from 'next/link';


function FAQ2() {
  return (
    <>
	<Header2/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Faq</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Faq</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Faq --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <Accordion_sm/>
                    </div>
					<div className="col-lg-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                        <Accordion_sm/>
                    </div>
				</div>
			</div>
		</section>
			
	</div>
	<Footer2/>
    </>
  )
}

export default FAQ2;