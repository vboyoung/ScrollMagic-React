import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
import './Scrollup.scss';
import 'holderjs';


const scrollup = () => {
  return (
  <>
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
