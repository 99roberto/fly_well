import React from 'react';
import Slide from './Slide';
import { Container, Button, Th } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Home extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <Slide></Slide>
        <Container>
          <div className="home">
           </div>
        </Container>
      </>
    );
  }
}

export default Home;
