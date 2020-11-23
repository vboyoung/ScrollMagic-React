import React, { useState } from 'react';

import {Jumbotron} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';


const Layout = () => (
  <Container className="p-3">
    <Jumbotron className="pb-1">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <h2 className="header">Using Sass with custom theming</h2>
      <AlertDismissibleExample />
      <hr />
      <p>
        You can check further in information on the official Bootstrap docs{' '}
        <a
          href="https://getbootstrap.com/docs/4.3/getting-started/theming/#importing"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </Jumbotron>
  </Container>
);
export default Layout;


function AlertDismissibleExample() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          I am an alert of type <span className="dangerText">danger</span>! But
          my color is Teal!
        </Alert.Heading>
        <p>
          By the way the button you just clicked is an{' '}
          <span className="infoText">Info</span> button but is using the color
          Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium debitis deleniti distinctio impedit officia reprehenderit
          suscipit voluptatibus. Earum, nam necessitatibus!
        </p>
      </Alert>
    );
  }
  return (
    <Button variant="info" onClick={() => setShow(true)}>
      Show Custom Styled Alert
    </Button>
  );
}