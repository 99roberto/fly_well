import './index.css'; 
import { Col, Row, Button } from 'react-bootstrap';
import { AppName, AppDomine, AdmEmail} from '../../constantes';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 

import * as React from "react";
import * as ReactDOM from "react-dom";
import { PDFExport } from "@progress/kendo-react-pdf";
import BtnGoBack from './BtnGoBack';
const Pdf = ({evaluation, _ref, stackKey, back}) => {
  const pdfExportComponent = React.useRef(null);
  return (
    <div>
     

      <PDFExport paperSize="A4" margin="2cm" ref={pdfExportComponent} className="fontPdf">
     
                <div  className="fontPdf">
                  <div style={{ maxWidth: 850, padding: '2px' }}  className="fontPdf">
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
                    <div className="question" ref={_ref} style={{ margin: '2px' }}>
                      {evaluation.length == 0 && (
                        <>
                        <h2>Resultado</h2>
                      
<p>Você não possui contraindicação para voar, nem exigência de consulta médica antes de voar, conforme recomendações da International Air Transport Association (IATA) e do Conselho Federal de Medicina (CFM).</p>

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
                      {evaluation.length > 0 && (
                        <div style={{marginLeft:50, marginRight:50}}  className="fontPdf">
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
                      {evaluation.map((ev, i) => {
                        return (
                          <div key={"evaluation"+i} style={{marginLeft:50, marginRight:50}}  className="fontPdf">
                          <div dangerouslySetInnerHTML={{ __html: ev.question.question }} />
                            <p>{ev.option.label}</p>
                            {ev.selects_responses && ev.selects_responses.length > 0 && (
                              <div> 
                                  {ev.selects_responses.map((e,i) => {
                                    return    <div dangerouslySetInnerHTML={{ __html: e }} /> 
                                  })} 
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
                
                </div>
      </PDFExport>
      <div className={'acoes'}>
        <Row style={{ textAlign: 'center' }} className={'acoes'}>
        <Col style={{ textAlign: 'center' }} xs={12} lg="12" sm={12}>
          <Button
            style={{minWidth:"300px", maxWidth:"300px", marginBottom:"20px"}}
            onClick={() => {
              if (pdfExportComponent.current) {
                pdfExportComponent.current.save();
              }
            }}
          >
            Export PDF
          </Button>
        </Col>
       
        </Row>
      </div>


    </div>
  );
};

export default Pdf;
// 
// div className={'acoes'}>
//                     <Row style={{ textAlign: 'center' }} className={'acoes'}>
//                       {this.state.evaluation.length > 0 && (
//                         <Col style={{ textAlign: 'center' }} xs={12} lg="12" sm={12}>
//                           <Button onClick={toPdf} style={{minWidth:"300px", maxWidth:"300px", marginBottom:"20px"}}>Gerar PDF</Button>
//                         </Col>
//                       )}
//                       <Col style={{ textAlign: 'center' }} xs={12} lg="12" sm={12}>
//                         <Link to={`/`} className="btn btn-light" style={{minWidth:"300px", maxWidth:"300px", marginBottom:"20px"}}>
//                           Home
//                         </Link>
//                       </Col>
//                       <Col style={{ textAlign: 'center' }} xs={12} lg="12" sm={12}>
//                         {this.state.stackKey.length > 1 && (
//                           <BtnGoBack  onClick={() => this.back()} id="brn-voltar-1">
//                             Voltar
//                           </BtnGoBack>
//                         )}
//                       </Col>
//                     </Row>
//                   </div>