import getMapaMental from '../../model/mapamental';
import './index.css';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ReactToPdf from 'react-to-pdf';
import { AppName } from '../../constantes';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [4, 2],
};
class Question extends React.Component {
  constructor(props) {
    const mapaMental = getMapaMental();
    super(props);
    this.state = {
      mapaMental,
      evaluation: [],
      show_evaluation: false,
      stackKey: [{ name: 'home' }],
      question: mapaMental['home'],
      selects_responses: [],
      ref: React.createRef(),
    };
  }

  goto(op) {
    console.log('+++++++++++++++++++');
    console.log(this.state.selects_responses);
    let key = op;
    if (typeof op !== 'string') {
      key = op.goto;
    }
    for (const i of this.state.stackKey) {
      if (i.name === key) {
        try {
          throw 'Questão [' + key + '] já está na pilha';
        } catch (e) {
          console.error(e);
        }
      }
    }

    const stackKey = this.state.stackKey;

    let show_evaluation = false;
    const obj = { name: key };
    if (key == 'FINISHED') {
      show_evaluation = true;
      let evaluation = stackKey.filter(o => o.question);
      this.setState({
        show_evaluation,
        evaluation,
        stackKey: stackKey.concat([obj]),
        selects_responses: [],
      });
      return;
    }
    if (key == 'home') {
      show_evaluation = false;
    }

    const question = this.state.mapaMental[key];
    if (question.question_type == 'evaluation') {
      const currentKey = stackKey[stackKey.length - 1].name;
      const current = this.state.mapaMental[currentKey];
      obj.option = op;
      obj.response = question;
      obj.question = current;
      obj.selects_responses = this.state.selects_responses;
    }
    this.setState({
      question,
      stackKey: stackKey.concat([obj]),
      show_evaluation,
      evaluation: [],
      selects_responses: [],
    });
  }

  back() {
    if (this.state.stackKey.length <= 1) {
      return;
    }

    let stackKey = this.state.stackKey;
    stackKey.pop();
    let topo = stackKey[stackKey.length - 1];
    let key = topo.name;
    let question = this.state.mapaMental[key];
    // this.goto(key);
    this.setState({ question, stackKey, show_evaluation: false, evaluation: [], selects_responses: [] });
  }

  onMarckResponse(event) {
    console.log(event.target);

    let selects_responses = this.state.selects_responses;
    if (event.target.checked) selects_responses = selects_responses.concat([event.target.value]);
    else selects_responses = selects_responses.filter(v => v !== event.target.value);
    this.setState({ selects_responses });
  }

  render() {
    return (
      <Container className={this.state.question.style}>
        {/* <div>
          <p>{JSON.stringify(this.state.stackKey)}</p>
          <p>{JSON.stringify(this.state.evaluation.map(e => e.selects_responses))}</p>
        </div> */}
        {this.state.show_evaluation && (
          <>
            <ReactToPdf>
              {({ toPdf, targetRef }) => (
                <>
                  <div style={{ maxWidth: 750, padding: '10px' }} ref={targetRef}>
                    <Navbar.Brand href="#">
                      {' '}
                      <img
                        alt=""
                        src="https://99roberto.github.io/fly_well/logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />{' '}
                    </Navbar.Brand>
                    <Navbar.Brand href="#">{AppName}</Navbar.Brand>
                    <div className="question" ref={this.state.ref} style={{ margin: '10px' }}>
                      {this.state.evaluation.length == 0 && (
                        <h2>Ausência de obrigatoriedade de consulta médica para voar. </h2>
                      )}
                      {this.state.evaluation.length > 0 && (
                        <div>
                          <h2>
                            {'É  recomendada avaliação médica antes de realizar a viagem aérea para orientações. '}
                          </h2>
                          <h3>
                            Querido médico, esta pessoa respondeu o questionário e foi identificado o seguinte fator de
                            risco:{' '}
                          </h3>
                        </div>
                      )}
                      {this.state.evaluation.map(ev => {
                        return (
                          <div className="">
                            {ev.question.type === 'html' ? (
                              <div dangerouslySetInnerHTML={{ __html: ev.question.question }} />
                            ) : (
                              <h4>{ev.question.question}</h4>
                            )}
                            <p>{ev.option.label}</p>
                            {ev.selects_responses && ev.selects_responses.length > 0 && (
                              <div className="container" style={{ marginLeft: '25%', marginRight: '25%' }}>
                                <ul style={{ padding: 0, margin: 0, textAlign: 'left' }}>
                                  {ev.selects_responses.map(e => {
                                    return <li>{e}</li>;
                                  })}
                                </ul>
                              </div>
                            )}
                            <p>
                              {ev.response.type === 'html' ? (
                                <div dangerouslySetInnerHTML={{ __html: ev.response.question }} />
                              ) : (
                                <div>{ev.response.question}</div>
                              )}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={'acoes'}>
                    <Row className={'acoes'}>
                      <Col xs={12} lg="12" sm={12}>
                        <Button onClick={toPdf}>Gerar PDF</Button>
                        <Col xs={12} lg="12" sm={12}>
                          {this.state.stackKey.length > 1 && (
                            <Button variant="secondary" onClick={() => this.back()}>
                              Voltar
                            </Button>
                          )}
                        </Col>
                      </Col>
                    </Row>
                  </div>
                </>
              )}
            </ReactToPdf>
          </>
        )}
        {this.state.question && !this.state.show_evaluation && (
          <div className="question">
            <div className="desc">
              {this.state.question.type === 'html' ? (
                <div dangerouslySetInnerHTML={{ __html: this.state.question.question }} />
              ) : (
                <p>{this.state.question.question}</p>
              )}
              {this.state.question.checkboxs && (
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                  {this.state.question.checkboxs.map(m => {
                    return (
                      <li>
                        <input
                          type="checkbox"
                          name={m}
                          value={m}
                          onChange={v => this.onMarckResponse(v)}
                          style={{ width: '30px', height: '30px' }}
                        />
                        {m}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="respostas">
              {this.state.question.options && (
                <div className={'acoes'}>
                  <Row className={''}>
                    {this.state.question.options.map((op, idx) => {
                      return (
                        <Col xs={12} lg="12" sm={12}>
                          <Button
                            variant={op.variant ? op.variant : 'primary'}
                            onClick={() => this.goto(op)}
                            key={idx}
                            disabled={
                              !(
                                !this.state.question.checkboxs ||
                                this.state.question.checkboxs.length == 0 ||
                                (op.select && this.state.selects_responses.length > 0) ||
                                (!op.select && this.state.selects_responses.length == 0)
                              ) ||
                              (this.state.question.mandatory &&
                                this.state.selects_responses.length != this.state.question.checkboxs.length)
                            }
                          >
                            {op.label}
                          </Button>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              )}
            </div>
            <div className={'acoes'}>
              <Row className={'acoes'}>
                <Col xs={12} lg="12" sm={12}>
                  {this.state.stackKey.length > 1 && (
                    <Button variant="secondary" onClick={() => this.back()}>
                      Voltar
                    </Button>
                  )}
                </Col>
              </Row>
            </div>
          </div>
        )}
      </Container>
    );
  }
}

export default Question;
