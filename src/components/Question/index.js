import getMapaMental from '../../model/mapamental';
import './index.css';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ReactToPdf from 'react-to-pdf';
import { AppName, AppDomine, AdmEmail} from '../../constantes';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight, faCircleChevronLeft, faFlagCheckered } from '@fortawesome/free-solid-svg-icons'
import SlideQuestionario from '../SlideQuestionario';
import Pdf from './Pdf';
import BtnGoBack from './BtnGoBack';

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
        </div>  */}
        {this.state.show_evaluation && (
          <>
          <Pdf _ref={this.state.ref} evaluation={this.state.evaluation} stackKey={this.state.stackKey} back={this.back} ></Pdf>
          <div className={'acoes'}>
        <Row style={{ textAlign: 'center' }} className={'acoes'}>
        <Col style={{ textAlign: 'center' }} xs={12} lg="12" sm={12}>
          
        </Col>
        <Col style={{ textAlign: 'center' }} xs={12} lg="12" sm={12}>
          <Link to={`/`} className="btn btn-light" style={{minWidth:"300px", maxWidth:"300px", marginBottom:"20px"}}>
            Home
          </Link>
        </Col>
        <Col style={{ textAlign: 'center' }} xs={12} lg="12" sm={12}>
          {this.state.stackKey.length > 1 && (
            <BtnGoBack  onClick={() => this.back()} id="brn-voltar-1">
              Voltar
            </BtnGoBack>
          )}
        </Col> 
        </Row>
      </div>
          </>
        )}

        {this.state.stackKey.length === 1 && (
          <SlideQuestionario titulo={"Questionário"}></SlideQuestionario>
        )}
        {this.state.question && !this.state.show_evaluation && (
          <div className="question">
            <div className="desc" style={{minHeight:"300px"}}>
              {this.state.question.type === 'html' ? (
                <div dangerouslySetInnerHTML={{ __html: this.state.question.question }} />
              ) : (
                <p>{this.state.question.question}</p>
              )}

              {this.state.question.question_type == 'evaluation' && this.state.stackKey[this.state.stackKey.length-1].selects_responses.map( (e,i)=>{
                return (
                <p dangerouslySetInnerHTML={{ __html:e }} key={{i}} />
              )
              }) }
              {this.state.question.checkboxs && (
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                  {this.state.question.checkboxs.map((m,i) => {
                    let msg= m;
                    let resp = m;
                    if(m.q){
                      msg = m.q;
                    }
                    if(m.r){
                      resp = m.r;
                    }
                    return (
                      <li key={"q_ckb"+i}> 
                      <div>
                        <input
                          type="checkbox"
                          name={msg}
                          value={resp}
                          id={"op"+i}
                          onChange={v => this.onMarckResponse(v)}
                          style={{ width: '1rem', height: '1rem' }}
                        />
                       <label  for={"op"+i}> {msg}</label>
                       </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            
            <div className="respostas">
              {this.state.question.options && (
                <div className={'acoes'}  >
                
                  <Row className={''}>

                    {this.state.question.options.map((op, idx) => {
                      return (
                        <Col xs={12} lg="12" sm={12} key={idx}>
                          <Button
                            style={{minWidth:"300px", maxWidth:"300px", marginBottom:"10px"}}
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
                          {op.variant=='dark' && 
                          <FontAwesomeIcon icon={faFlagCheckered} style={{marginRight:10}}/>
                          }
                          {op.variant=='info' && 
                          <FontAwesomeIcon icon={faCircleRight} style={{marginRight:10}}/>
                          }
                            {op.label}
                          </Button>
                        </Col>
                      );
                    })}

                    <Col xs={12} lg="12" sm={12}>
                      {this.state.stackKey.length > 1 && (
                        <BtnGoBack   onClick={() => this.back()} id="brn-voltar-2">
                          Voltar
                        </BtnGoBack>
                      )}
                    </Col>

                 
                  </Row>
                </div>
              )}

            </div>
           
            {/* {this.state.question.question_type != 'evaluation' && (
              <div className={'acoes'}>
              <Row className={'acoes'}>
                <Col xs={12} lg="12" sm={12}>
                  {this.state.stackKey.length > 1 && ( 
                    <BtnGoBack  onClick={() => this.back()} id="brn-voltar-3">
                      Voltar
                    </BtnGoBack>
                  )}
                </Col>
              </Row>
            </div>
            )} */}
        </div>
        )}
      </Container>
    );
  }
}

export default Question;
