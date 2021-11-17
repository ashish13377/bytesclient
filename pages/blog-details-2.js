import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";
import Link from 'next/link';


function BlogDetails2() {
	return (
		<>
			<Header2 />
			<div className="page-content bg-white">
				{/* <!-- Banner  --> */}
				<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{ "backgroundImage": "url(images/banner/bnr1.jpg)" }}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1>Blog Single</h1>
							{/* <!-- Breadcrumb Row --> */}
							<nav aria-label="breadcrumb" className="breadcrumb-row">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
									<li className="breadcrumb-item active" aria-current="page">Blog</li>
								</ul>
							</nav>
							{/* <!-- Breadcrumb Row End --> */}
						</div>
					</div>
				</div>
				{/* <!-- Banner End --> */}

				{/* <!-- Blog Large --> */}
				<section className="content-inner bg-img-fix" style={{ "backgroundImage": "url(images/background/bg2.png)", "backgroundSize": "contain" }}>
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								{/* <!-- blog start --> */}
								<div className="dlab-blog blog-single style-2">
									<div className="dlab-media rounded-md shadow">
										<img src="images/blog/default/thum1.jpg" alt="" />
									</div>
									<div className="dlab-meta m-t30">
										<ul>
											<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
											<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
											<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
											<li className="post-share"><i className="flaticon-share"></i>
												<ul>
													<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
													<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
													<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
												</ul>
											</li>
										</ul>
									</div>
									<h4 className="dlab-title">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies fusce ac ligula vel enim fermentum blandit.</h4>
									<div className="dlab-post-text">
										<p>Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae elit molestie malesuada. Curabitur venenatis venenatis elementum. Etiam ullamcorper metus vel leo convallis, quis bibendum tortor congue. Vivamus dapibus eu ex sed tempus.</p>
										<p>Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. Proin cursus massa ipsum, at lacinia erat elementum sit amet. Quisque sem tortor, convallis in arcu eu, accumsan finibus massa. Donec et sapien risus. Duis feugiat, odio vulputate dignissim consectetur, diam metus dictum sapien, at tincidunt nibh eros vel velit. Aenean accumsan et eros et hendrerit. In metus quam, consequat id imperdiet eu, suscipit a nulla. Morbi mollis eu sem et condimentum. Pellentesque iaculis imperdiet purus ut tincidunt.</p>
										<blockquote className="blockquote style-2">
											<h4 className="blockquote-content">Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae elit molestie malesuada.</h4>
										</blockquote>
										<p>Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue lectus. In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue in, condimentum tellus. Quisque a velit a eros malesuada ullamcorper. Maecenas ultricies, nisl vel tristique iaculis, libero ex dictum nisi, quis faucibus velit leo vel sapien. </p>
										<h4 className="m-b30">Donec sit amet semper massa ellentesque habitant morbi</h4>
										<img className="alignleft rounded-md shadow" width="300" src="images/blog/blog-grid/pic1.jpg" alt="" />
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut imperdiet arcu, et consectetur massa. Vivamus in arcu quis diam gravida tempus. Vivamus et ullamcorper mauris, in sollicitudin tortor. Morbi vitae lacus dolor. Phasellus blandit et sapien a efficitur.</p>
										<p>In mollis auctor odio a porttitor. Vivamus venenatis auctor nulla, et imperdiet enim pretium sit amet. Mauris rutrum ex quis dolor elementum, eu pharetra dui gravida. Ut iaculis lacus molestie dui interdum, vel varius justo egestas. Donec diam ex, sodales nec molestie quis, consequat non justo. Cras elementum velit quis dolor finibus condimentum quis ac quam. Suspendisse vitae justo ut sapien rhoncus egestas.</p>
										<p>Integer accumsan lacinia nulla ac maximus. In dapibus est vel risus tincidunt, nec dignissim eros suscipit. Vestibulum fermentum aliquet ligula vitae laoreet.</p>
										<p>Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue lectus. In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue in, condimentum tellus. Quisque a velit a eros malesuada ullamcorper. Maecenas ultricies, nisl vel tristique iaculis, libero ex dictum nisi, quis faucibus velit leo vel sapien.</p>
									</div>
									<div className="dlab-meta meta-bottom border-top">
										<div className="post-tags">
											Tags:
									<a href="javascript:void(0);">#Child </a> ,
									<a href="javascript:void(0);">#Eduction </a> ,
									<a href="javascript:void(0);">#Money </a> ,
									<a href="javascript:void(0);">#Resturent </a>
										</div>
										<div className="dlab-social-icon primary-light">
											<ul>
												<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
												<li><a className="fa fa-instagram" href="https://www.instagram.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="row extra-blog style-2">
									<div className="col-lg-12 m-b30">
										<h2 className="blog-title">Related Blogs</h2>
										<div className="dlab-separator style-1"></div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="dlab-blog style-1 m-b30">
											<div className="dlab-info">
												<div className="dlab-meta">
													<ul>
														<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
														<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
														<li className="post-share"><i className="flaticon-share"></i>
															<ul>
																<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
																<li><a className="fa fa-twitter"  href="https://ads.twitter.com/login"></a></li>
																<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
															</ul>
														</li>
													</ul>
												</div>
												<h5 className="dlab-title">
													<a href="/blog-details-2">Maecenas laoree efficitur sagittis aliquam eleifend nisl.</a>
												</h5>
												<p className="m-b0">Aenean pharetra velit , non ullamcorper quam dictum nec. Praesent vel rhoncus dolor, molestie maximus risus.</p>
											</div>
											<div className="dlab-media">
												<a href="/blog-details-2"><img src="images/blog/blog-grid/pic1.jpg" alt="" /></a>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="dlab-blog style-1 m-b30">
											<div className="dlab-info">
												<div className="dlab-meta">
													<ul>
														<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
														<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
														<li className="post-share"><i className="flaticon-share"></i>
															<ul>
																<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
																<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
																<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
															</ul>
														</li>
													</ul>
												</div>
												<h5 className="dlab-title">
													<a href="/blog-details-2">Donec feugiat mollis nisi in dignissim. Morbi sollicitudin.</a>
												</h5>
												<p className="m-b0">Aenean pharetra velit , non ullamcorper quam dictum nec. Praesent vel rhoncus dolor, molestie maximus risus. </p>
											</div>
											<div className="dlab-media">
												<a href="/blog-details-2"><img src="images/blog/blog-grid/pic2.jpg" alt="" /></a>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="dlab-blog style-1 m-b30">
											<div className="dlab-info">
												<div className="dlab-meta">
													<ul>
														<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
														<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
														<li className="post-share"><i className="flaticon-share"></i>
															<ul>
																<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
																<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
																<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
															</ul>
														</li>
													</ul>
												</div>
												<h5 className="dlab-title">
													<a href="/blog-details-2">Quisque egestas iaculis felis eget placerat ut pulvinar mi.</a>
												</h5>
												<p className="m-b0">Aenean pharetra velit , non ullamcorper quam dictum nec. Praesent vel rhoncus dolor, molestie maximus risus. </p>
											</div>
											<div className="dlab-media">
												<img src="images/blog/blog-grid/pic3.jpg" alt="" />
											</div>
										</div>
									</div>
								</div>
								<div className="row clear" id="comment-list">
									<div className="col-lg-6">
										<div className="comments-area style-2" id="comments">
											<h2 className="comments-title">8 Comments</h2>
											<div className="dlab-separator style-1"></div>
											<div className="clearfix m-t30">
												{/* <!-- comment list END --> */}
												<ol className="comment-list">
													<li className="comment">
														<div className="comment-body">
															<div className="comment-author vcard">
																<img className="avatar photo" src="images/testimonials/pic1.jpg" alt="" />
																<cite className="fn">Celesto Anderson</cite>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  magna aliqua.</p>
															<div className="reply">
																<a href="javascript:void(0);" className="comment-reply-link">
																	<i className="fa fa-reply"></i>Reply</a>
															</div>
														</div>
														<ol className="children">
															<li className="comment odd parent">
																<div className="comment-body">
																	<div className="comment-author vcard">
																		<img className="avatar photo" src="images/testimonials/pic2.jpg" alt="" />
																		<cite className="fn">Jake Johnson</cite>
																	</div>
																	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
																	<div className="reply">
																		<a href="javascript:void(0);" className="comment-reply-link">
																			<i className="fa fa-reply"></i>Reply</a>
																	</div>
																</div>
																{/* <!-- list END --> */}
															</li>
														</ol>
														{/* <!-- list END --> */}
													</li>
													<li className="comment">
														<div className="comment-body">
															<div className="comment-author vcard">
																<img className="avatar photo" src="images/testimonials/pic1.jpg" alt="" />
																<cite className="fn">John Doe</cite>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  magna aliqua.</p>
															<div className="reply">
																<a href="javascript:void(0);" className="comment-reply-link">
																	<i className="fa fa-reply"></i>Reply</a>
															</div>
														</div>
													</li>
												</ol>
												{/* <!-- comment list END --> */}
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										{/* <!-- Form --> */}
										<div className="comment-respond style-2" id="respond">
											<h2 className="comment-reply-title" id="reply-title">Leave a Reply
										<small>
													<a style={{ "display": "none" }} href="javascript:void(0);" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a>
												</small>
											</h2>
											<div className="dlab-separator style-1 m-b30"></div>
											<form className="comment-form m-t30" id="commentform" method="post">
												<p className="comment-form-author">
													<label for="author">Name <span className="required">*</span></label>
													<input type="text" name="Author" placeholder="Author" id="author" />
												</p>
												<p className="comment-form-email">
													<label for="email">Email <span className="required">*</span></label>
													<input type="text" placeholder="Email" name="email" id="email" />
												</p>
												<p className="comment-form-url">
													<label for="url">Website</label>
													<input type="text" placeholder="Website" name="url" id="url" />
												</p>
												<p className="comment-form-comment">
													<label for="comment">Comment</label>
													<textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
												</p>
												<p className="form-submit">
													<input type="submit" value="Submit Now" className="submit btn btn-primary gradient rounded-xl" id="submit" name="submit" />
												</p>
											</form>
										</div>
										{/* <!-- Form --> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>
			<Footer2 />
		</>
	)
}

export default BlogDetails2;