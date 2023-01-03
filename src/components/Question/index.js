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
const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [4, 2],
};

const BtnGoBack = ({onClick, children})=>{
  return (
    <Button variant="danger" onClick={onClick}>
                    <FontAwesomeIcon icon={faCircleChevronLeft} style={{marginRight:10}}/>
                      {children}
                    </Button>
  )
}
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
                        src="/airplane192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />{' '}
                    </Navbar.Brand>
                    <Navbar.Brand href="#">{AppName}</Navbar.Brand>
                    <div className="question" ref={this.state.ref} style={{ margin: '10px' }}>
                      {this.state.evaluation.length == 0 && (
                        <>
                        <h2>Resultado</h2>
                      
<p>Você não possui contraindicação para voar nem exigência de consulta médica antes de voar conforme recomendações da International Air Transport Association (IATA) e do Conselho Federal de Medicina (CFM).</p>

<p>Este aplicativo se destina a auxiliar pessoas na tomada de decisão em procurar auxílio médico antes de realizar uma viagem aérea e educadores em disseminar conhecimento de saúde sobre saúde aeroespacial. Não tem a intenção de definir diagnóstico de saúde, emitir liberação oficial para voar ou substituir avaliação médica. </p>

<p>Se você está planejando uma viagem aérea, está com sintomas ou preocupação em relação à sua saúde, procure seu profissional médico de confiança para avaliação. </p>

<Row className={''}>
<Col xs={12} lg="12" sm={12}>
<Link to={`/InformacoesParaMedicos`} className="btn btn-link">Informações para médicos</Link>
</Col>
</Row>
<Row>
<Col xs={12} lg="12" sm={12}>
<Link to={`/linksuteis`} className="btn btn-link">Informações úteis</Link>
</Col>
</Row>
</>
                      )}
                      {this.state.evaluation.length > 0 && (
                        <div style={{marginLeft:50, marginRight:50}}>
                          <div className='cabecalho' style={{textAlign:'center', alignContent: 'center'}}>
                            <img src="/cabecalho.png" style={{textAlign:'center', alignContent: 'center'}}/>
                          </div>
                          <br />
                          <br />
                          <p style={{ textAlign: 'center' }}> Aplicativo {AppName} </p>
                          <br />
                          <br />
                          <p style={{ textAlign: 'center' }}> Prezado (a) Médico (a), </p>
                          <br />
                          <p style={{ textAlign: 'justify' }}>
                            {' '}
A partir da aplicação do questionário autoaplicado Voe Bem,{' '}
desenvolvido na Universidade Federal de Ciências da Saúde de Porto Alegre e {' '}
de acordo com as normativas do manual médico da International Air Transport Association (12a edição) {' '}
e do Conselho Federal de Medicina (CFM), que se destina a auxiliar pessoas na {' '}
tomada de decisão em procurar auxílio médico antes de realizar uma viagem aérea, {' '}
informamos que a pessoa respondeu às seguintes perguntas que direcionam recomendação {' '}
médica antes de voar:{' '}
                         </p>
                          <br />
                          <br />
                        </div>
                      )}
                      {this.state.evaluation.map((ev, i) => {
                        return (
                          <div className="" key={"evaluation"+i} style={{marginLeft:50, marginRight:50}}>
                            {ev.question.type === 'html' ? (
                              <div dangerouslySetInnerHTML={{ __html: ev.question.question }} />
                            ) : (
                              <h4>{ev.question.question}</h4>
                            )}
                            <p>{ev.option.label}</p>
                            {ev.selects_responses && ev.selects_responses.length > 0 && (
                              <div className="container" style={{ marginLeft: '25%', marginRight: '25%' }}>
                                <ul style={{ padding: 0, margin: 0, textAlign: 'left' }}>
                                  {ev.selects_responses.map((e,i) => {
                                    return <li key={"selects_responses"+i}>{e}</li>;
                                  })}
                                </ul>
                              </div>
                            )}
                          </div>
                        );
                      })}
                      <br />
                      <br />
                      <p style={{ textAlign: 'center',  marginLeft:50, marginRight:50}}>
                      Aplicativo  {AppName}<br/>
                      Universidade Federal de Ciências da Saúde de Porto Alegre
                      </p>
                      <p style={{ textAlign: 'end' }}> Porto Alegre, RS.</p>
                      <p style={{ textAlign: 'center' }}> {AdmEmail}</p>
                      <p style={{ textAlign: 'center' }}> {AppDomine}</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src="/flywell.png" />
                    </div>
                  </div>
                  <div className={'acoes'}>
                    <Row style={{ textAlign: 'center' }} className={'acoes'}>
                      {this.state.evaluation.length > 0 && (
                        <Col style={{ textAlign: 'center' }} xs={12} lg="12" sm={12}>
                          <Button onClick={toPdf}>Gerar PDF</Button>
                        </Col>
                      )}
                      <Col style={{ textAlign: 'center' }} xs={12} lg="12" sm={12}>
                        <Link to={`/`} className="btn">
                          Home
                        </Link>
                      </Col>
                      <Col style={{ textAlign: 'center' }} xs={12} lg="12" sm={12}>
                        {this.state.stackKey.length > 1 && (
                          <BtnGoBack  onClick={() => this.back()}>
                            Voltar
                          </BtnGoBack>
                        )}
                      </Col>
                    </Row>
                  </div>
                </>
              )}
            </ReactToPdf>
          </>
        )}

        {this.state.stackKey.length === 1 && (
          <SlideQuestionario titulo={"Questionário"}></SlideQuestionario>
        )}
        {this.state.question && !this.state.show_evaluation && (
          <div className="question">
            <div className="desc">
              {this.state.question.type === 'html' ? (
                <div dangerouslySetInnerHTML={{ __html: this.state.question.question }} />
              ) : (
                <h4>{this.state.question.question}</h4>
              )}
              {this.state.question.checkboxs && (
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                  {this.state.question.checkboxs.map((m,i) => {
                    return (
                      <li key={"q_ckb"+i}> 
                      <div>
                        <input
                          type="checkbox"
                          name={m}
                          value={m}
                          id={"op"+i}
                          onChange={v => this.onMarckResponse(v)}
                          style={{ width: '1rem', height: '1rem' }}
                        />
                       <label  for={"op"+i}> {m}</label>
                       </div>
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

                    {this.state.question.question_type == 'evaluation' && (
                        <Col xs={12} lg="12" sm={12}>
                          {this.state.stackKey.length > 1 && (
                            <BtnGoBack   onClick={() => this.back()}>
                              Voltar
                            </BtnGoBack>
                          )}
                        </Col>
                    )}

                    {this.state.question.options.map((op, idx) => {
                      return (
                        <Col xs={12} lg="12" sm={12} key={idx}>
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
                  </Row>
                </div>
              )}

            </div>
           
            {this.state.question.question_type != 'evaluation' && (
              <div className={'acoes'}>
              <Row className={'acoes'}>
                <Col xs={12} lg="12" sm={12}>
                  {this.state.stackKey.length > 1 && ( 
                    <BtnGoBack  onClick={() => this.back()}>
                      Voltar
                    </BtnGoBack>
                  )}
                </Col>
              </Row>
            </div>
            )}
        </div>
        )}
      </Container>
    );
  }
}

export default Question;
