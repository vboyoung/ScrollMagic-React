import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginPage from './views/LoginPage/LoginPage';
import Aos from './views/AosExamples/Aos1';
import Auri from './views/AosExamples/Auri';
import Bootstrap from './views/BootstrapExamples/Page1';
import Scrollup from './views/Scrollup/Scrollup';
import ClassToggle from './views/ScrollMagicExamples/ClassToggle/ClassToggle';
import List from './views/ScrollMagicExamples/List/List';
import SplitText from './views/ScrollMagicExamples/SplitText/SplitText';
import Sticky from './views/ScrollMagicExamples/Sticky/Sticky';
import StickyIcon from './views/ScrollMagicExamples/StickyIcon/StickyIcon';
import Svg from './views/ScrollMagicExamples/Svg/Svg';
import Tween from './views/ScrollMagicExamples/Tween/Tween';



const App = () => (
  <Router>
    <Switch>


      <Route exact path="/login" component={LoginPage} />     

      <Route exact path="/Aos/page1" component={Aos} /> 
      <Route exact path="/Aos/page2" component={Auri} /> 

      <Route exact path="/Bootstrap/page1" component={Bootstrap} /> 

      <Route exact path="/Scrollup" component={Scrollup} /> 

      <Route exact path="/ClassToggle" component={ClassToggle} /> 
      <Route exact path="/List" component={List} /> 
      <Route exact path="/SplitText" component={SplitText} /> 
      <Route exact path="/Sticky1" component={Sticky} /> 
      <Route exact path="/Sticky2" component={StickyIcon} /> 
      <Route exact path="/Tween" component={Tween} /> 
      <Route exact path="/Svg" component={Svg} /> 
    </Switch>
</Router>
);

export default App;
