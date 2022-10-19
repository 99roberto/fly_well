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
            <Link to={`/question`} activeClassName="active">
              <button class="btn btn-default">
                <img src="https://99roberto.github.io/fly_well/av_icon.png" width="20" /> Questionário
              </button>
            </Link>
            <Link to={`/#saibamais`} activeClassName="active">
              <button class="btn btn-default">
                <img src="https://99roberto.github.io/fly_well/Info.png" width="20" /> Saiba mais
              </button>
            </Link>
          </div>
        </Container>
      </>
    );
  }
}

export default Home;
