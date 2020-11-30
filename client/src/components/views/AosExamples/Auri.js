import React, { useState } from 'react';
import './css/aos/aos.css';
import './scss/main.scss';

import AOS from 'aos';
import Image from 'react-bootstrap/Image'
import 'holderjs';


AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
})

const Auri = () => (
  <>

  {/* wrap start	 */}
  <div id="wrap">
    <div id="contents">

	{/* setion2 */}
    <div className="section section2" data-aos="fade-left" data-aos-delay="200">
		<p className="bg_txt">
			<svg xmlns="http://www.w3.org/2000/svg" width="242.202" height="251.442" viewBox="0 0 242.202 251.442">
				<defs></defs>
				<path id="u" data-name="txt_u" className="txt_u"
					d="M218.988-246.708v124.74c0,49.434-27.258,74.382-67.452,74.382-36.5,0-57.75-21.252-57.75-66.066V-246.708H36.036V-105.8C36.036-31.416,79,3.234,142.3,3.234c31.878,0,60.984-12.012,79.464-34.65V0h54.978V-246.708Z"
					transform="translate(-35.286 247.458)"></path>
			</svg>
		</p>
		<div className="layout">
			<div id="highlight">
				<h2 className="article_tit" data-aos="fade-up" data-aos-delay="600">
					<b className="red">auri</b>
					HIGHLIGHT</h2>
				<ul className="clearfix">
					<li data-aos="fade-up" data-aos-delay="800">
						<a href="#">
							<span className="img_wrap"><Image src="holder.js/292x362" thumbnail /></span>
							<strong className="highlight_tit">카드뉴스</strong>
						</a>
					</li>
					<li data-aos="fade-up" data-aos-delay="1000">
						<a href="#"><span className="img_wrap"><Image src="holder.js/292x362" thumbnail /></span>
							<strong className="highlight_tit">정기간행물</strong>
						</a>
					</li>
					<li data-aos="fade-up" data-aos-delay="1200">
						<a href="#"><span className="img_wrap"><Image src="holder.js/292x362" thumbnail /></span>
							<strong className="highlight_tit">auriTV</strong>
						</a>
					</li>
				</ul>
				<a href="#" className="more" data-aos="fade-left"	data-aos-delay="1000"><span className="hidden">auri highlight 더보기</span></a>
			</div>
		</div>
	</div>
	{/* setion2 end	 */}








	{/* contents last */}
    </div>
  </div>

  </>
);
export default Auri;


