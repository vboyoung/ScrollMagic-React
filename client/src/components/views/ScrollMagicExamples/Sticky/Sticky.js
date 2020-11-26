// @flow
import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

const StickyStyled = styled.div`
  .section {
    height: 100vh;
  }
  
  .sticky {
    background-color: gray;
    width: 100%;

    & div {
      padding: 30px;
    }
  }
  
  .black {
    background-color: black;
  }
`;

const Sticky = () => (
  <StickyStyled>
    <div className="section" />
    <Controller>
      <Scene duration={600} pin={true} enabled={true} indicators={true}>
        <div className="sticky"><div>Pin Test1</div></div>
      </Scene>
      <Scene duration={200} pin={{ pushFollowers: false }} indicators={true}>
        <div className="sticky"><div>Pin Test2</div></div>
      </Scene>
      <Scene duration={300} pin={true} offset={100} indicators={true}>
        <div className="sticky black"><div>Pin Test3</div></div>
      </Scene>
    </Controller>
    <div className="section" />
  </StickyStyled>
);

export default Sticky;
