import React, { useState } from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const ScrollUpStyled = styled.div`
.section {
  height: 70vh;
  padding: 3em;
  background-color: #f1f1f1;
  
  & h1 {
    text-align:center;
  }
}

.sticky {
  padding: 3em;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  
  & blockquote {
    font-size: 2.3em;
    width: 30%;
    margin-top: 17%;
    position: absolute;
  }

  & span.redline {
    transition: width 0.3s ease-out;
    width: 10%;
    background: red;
    display: block;
    height: 5px;
    margin-top: 20px;

    &.zap {
      width: 100%;
    }

  }
  
  & .tween {
    margin-top: 5%;
	  width: 350px;
    height: 230px;
    background-color: gray;
    //margin: 0 !important;
    position: relative;
    left: 60%;
    opacity:1;
  }
  
  & .box {
    width: 100px;
    height: 100px;
    border: 5px solid lightgray;
    position: relative;
    left: 50%;
  }
}




`;



const Scrollup = () => (
  <ScrollUpStyled>
      <div className="section">
          <h1>Start</h1>
      </div>
      <div className="section">
          <h1>Scroll down GOOD</h1>
      </div>
      <section className="sticky">

        <blockquote>"You should totally subscribe to my channel now"
        <div id="trigger" />

          {/* redline */}
          <Controller>
            <Scene duration={200} classToggle="zap" triggerElement="#trigger" indicators={true}>
                  <span className="redline"></span>
            </Scene> 
          </Controller>
        </blockquote>

         
          <Controller>  
            <Scene
              triggerElement="#trigger"
              duration={300}
            >
            {(progress) => (
              <Tween
                to={{
                  left: '0px',
                  rotation: -360,
                  width: '200px',
                  height: '200px',
                  opacity:'0'
                }}      
                ease="Strong.easeOut" 
                totalProgress={progress}
                paused
              >   
                <div className="tween">Image 1</div>
              </Tween> 
            )}   
            </Scene>
   
            <Scene
              triggerElement="#trigger"
              duration={600}
              pin={false}
            >
            {(progress) => (
              <Tween
                from={{
                  css: {
                    left: 'calc(50% - 50px)',
                    rotation: -360,
                    width: '100px',
                    height: '100px',
                  },
                  ease: 'Strong.easeOut',
                }}
                to={{
                  css: {
                    left: '70%',
                    rotation: -180,
                    width: '50px',
                    height: '50px',
                  },
                  ease: 'Strong.easeOut',
                }}
                totalProgress={progress}
                paused
              >

            <div class="box">Image 2</div>
            </Tween>
            )}    
            </Scene>
          </Controller>
      </section>              
    

    <div className="section">
        <h1>Scroll Up</h1>
    </div>



  </ScrollUpStyled>
);

export default Scrollup;
