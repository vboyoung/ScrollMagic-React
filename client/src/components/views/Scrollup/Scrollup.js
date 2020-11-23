import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
import 'holderjs';

import { Controller, Scene } from 'react-scrollmagic';


const ClassToggleStyled = styled.div`
  .section {
    height: 100vh;
  }
  
  .test {
	  transition: width 0.3s ease-out;
	  width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 !important;
    
    &.yellow {
      background-color: yellow;
    }
  }

  .zap {
    width: 100%;
  }
`;



const ClassToggle = () => (
  <ClassToggleStyled>
    <div className="section" />
    <div id="trigger" />
    <Controller>
      <Scene duration={200} classToggle="zap" triggerElement="#trigger" indicators={true}>
        {(progress, event) => (
          <div className="test">Pin Test {event.type} {progress}</div>
        )}
      </Scene>
      <Scene classToggle={['.test', 'yellow']} reverse={false} indicators={true}>
        <div>Toggle other class</div>
      </Scene>
    </Controller>
    <div className="section" />
  </ClassToggleStyled>
);



const scrollup = () => {
  return (
  <>
    
    <ClassToggle />
    <section>
      <h1>Scroll down GOOD</h1>
    </section>
    <section className="sticky">
        <blockquote>"You should totally subscribe to my channel now"<span></span></blockquote>
        <Image id="" src="holder.js/695x377" thumbnail />
        <Image src="holder.js/615x411" thumbnail />
        <div id="box"></div>
    </section>
    <section>
     <h1>Scroll up</h1>
    </section>
  </>
  );
};

export default scrollup;
