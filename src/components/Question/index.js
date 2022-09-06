import getMapaMental from '../../model/mapamental';
import './index.css';
import React from 'react';
import { Button, Container } from 'react-bootstrap';

class Question extends React.Component {
  constructor(props) {
    const mapaMental = getMapaMental();
    super(props);
    this.state = {
      mapaMental,
      stackKey: ['home'],
      question: mapaMental['home'],
    };
  }

  goto(key) {
    console.log(key);
    const question = this.state.mapaMental[key];
    console.log(question);
    this.setState({ question, stackKey: this.state.stackKey.concat([key]) });
    console.log(this.state.stackKey);
  }

  back() {
    console.log('================');
    console.log(this.state.stackKey);
    if (this.state.stackKey.length <= 1) {
      return;
    }

    let stackKey = this.state.stackKey;
    stackKey.pop();
    const key = stackKey.pop();
    this.goto(key);
  }

  render() {
    return (
      <Container className={this.state.question.style}>
        {/* <div><p>{JSON.stringify(this.state.question.question)}</p></div> */}
        {this.state.question && (
          <div className="question">
            <div className="desc">
              {this.state.question.type === 'html' ? (
                <div dangerouslySetInnerHTML={{ __html: this.state.question.question }} />
              ) : (
                <p>{this.state.question.question}</p>
              )}
            </div>
            <div className="respostas">
              {this.state.question.options && (
                <div className={'g' + this.state.question.options.length}>
                  {this.state.question.options.map((op, idx) => {
                    return (
                      <Button variant="primary" onClick={() => this.goto(op.goto)} key={idx}>
                        {op.label}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
            <div className={'g1'}>
              {this.state.stackKey.length > 1 && (
                <Button variant="secondary" onClick={() => this.back()}>
                  Voltar
                </Button>
              )}
            </div>
          </div>
        )}
      </Container>
    );
  }
}

export default Question;
