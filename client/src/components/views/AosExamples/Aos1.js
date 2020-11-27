import React, { useState } from 'react';
import styled from 'styled-components';
import '../../../css/scss/App.scss';
import './aos.css';

import AOS from 'aos';
import Image from 'react-bootstrap/Image'
import 'holderjs';

import auriImage from "./img/section2_auri.png";

AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
})

const AosStyled = styled.div`

  .section1{
    height:70vh;
    padding: 3em;
    background-color: #f1f1f1;
 
    h1 {
      text-align:center;
    }
  } 

  .section2 {
    clear: both;
    position: relative;
    text-align: center;

    .bg_txt {
      position: absolute;
      z-index: 1;
      top: 6rem;
      left: -5.3rem;

      .txt_u {
        stroke-width: 1.5px; 
        fill: transparent; 
        stroke: transparent;} 
    }


    &:before {
       position: absolute;
       z-index: -1;
       bottom: 0;
       right:0;
       content: "";
       // display: inline-block;
       // left: 50%;
       // margin-left: -85.6rem;
       // width: 100%;
      height: 28.2rem;

      width: 90%;
      background-color: #E30A17;
    }


  }

  .layout {
    //width: 140rem;
    margin: 0 auto;
    overflow: hidden;
    text-align: left;
    padding-top: 10em;

    #highlight {
      position: relative;
      padding-left: 46.4rem;
      padding-bottom: 37.5rem;

      .article_tit {
        position: absolute;
        top: 0; left: 0; 
        font-size: 5.5rem; 
        font-weight: 900; 
        font-family: 'mtsr';
        color: #4B4B4B; 
        text-align: left; 
        line-height: 6rem; 
      }
      
      .article_tit b {
        display: block; 
        width: 13.3rem; 
        height: 8.1rem; 
        background-size: cover; 
        font-size: 0; 
        text-indent: -9999px;
      }

      ul > li {
        list-style: none;
        float:left;
        margin-left: 3rem;
        box-shadow: 0px 6px 6px #00000029;
        background-color: #efeff1;

        &:first-child {margin-left: 0;}

      }

      .img_wrap {display: block;}


    }
  }



`;

const Aos1 = () => (


    <AosStyled>
      <div className="section1">
        <h1>test</h1>
      </div>
      <div className="other" />
      <div className="section2" data-aos="fade-left" data-aos-delay="300" data-aos-anchor="other">

        <p className="bg_txt" >
          <svg xmlns="http://www.w3.org/2000/svg" width="242.202" height="251.442" viewBox="0 0 242.202 251.442">
            <defs></defs>
            <path id="u" data-name="txt_u" className="txt_u" d="M218.988-246.708v124.74c0,49.434-27.258,74.382-67.452,74.382-36.5,0-57.75-21.252-57.75-66.066V-246.708H36.036V-105.8C36.036-31.416,79,3.234,142.3,3.234c31.878,0,60.984-12.012,79.464-34.65V0h54.978V-246.708Z" transform="translate(-35.286 247.458)"></path>
          </svg>
        </p>

        <div className="layout">      

          <div id="highlight">
            <h2 className="article_tit" data-aos="fade-up" data-aos-delay="600">
               <b className="red"  style={{ backgroundImage: `url(${auriImage})` }}>auri</b> 
               HIGHLIGHT
            </h2>
            <ul>
              <li data-aos="fade-up" data-aos-delay="800"><span className="img_wrap"><Image src="holder.js/292x362" thumbnail /></span></li>
              <li data-aos="fade-up" data-aos-delay="1000"><span className="img_wrap"><Image src="holder.js/292x362" thumbnail /></span></li>
              <li data-aos="fade-up" data-aos-delay="1200"><span className="img_wrap"><Image src="holder.js/292x362" thumbnail /></span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section1">
        <h1>test</h1>
      </div>
    </AosStyled>

);
export default Aos1;


