import getMapaMental from '../../model/mapamental';
import './index.css';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './index.css';
import { AppName } from '../../constantes';
import SlideQuestionario from '../SlideQuestionario';
class InformacoesParaMedicos extends React.Component {
  render() {
    return (
      <Container>

      <SlideQuestionario titulo={"Informações para médicos"}></SlideQuestionario>
      
      <br></br>
      <p>
<b>Manual médico da IATA (12a edição)</b>
. International Air Transport Association. Medical Manual, 12th Edition ISBN 978-92-9264-250-1 All rights reserved. Montreal, Geneva. Disonível em: <a href="https://www.medicaltourismtraining.com/wp-content/uploads/2020/09/IATA-Medical-Manual-2020.pdf">
https://www.medicaltourismtraining.com/wp-content/uploads/2020/09/IATA-Medical-Manual-2020.pdf</a>
. Acesso em 30/11/22
</p>
<p>
Conselho Federal de Medicina Medicina aeroespacial: 
<b>Orientações gerais para médicos a bordo</b>
 - Brasília, DF: CFM, 2018. <a href="https://portal.cfm.org.br/images/PDF/cartilhaaeroespcaial2018.pdf">https://portal.cfm.org.br/images/PDF/cartilhaaeroespcaial2018.pdf</a>
</p>
<p>
CONSELHO FEDERAL DE MEDICINA; FACULDADE DE CIÊNCIAS MÉDICAS DA SANTA CASA DE SÃO PAULO. 
<b>Doutor, posso viajar de avião?  Cartilha de Medicina Aeroespacial</b>
. Brasília: Conselho Federal de Medicina, 2011. <a href="http://portal.cfm.org.br/images/stories/pdf/cartilha_medicina_aeroespacialfinal2.pdf">http://portal.cfm.org.br/images/stories/pdf/cartilha_medicina_aeroespacialfinal2.pdf</a>
</p>
<p>
ANAC. Agência Nacional de Aviação Civil. RESOLUÇÃO Nº 280, DE 11 DE JULHO DE 2013. 
<b>Dispõe sobre os procedimentos relativos à acessibilidade de passageiros com necessidade de assistência
 especial ao transporte aéreo e dá outras providências. </b>
 Disponível em: <a href="https://www.anac.gov.br/assuntos/legislacao/legislacao-1/resolucoes/resolucoes-2013/resolucao-no-280-de-11-07-2013"> https://www.anac.gov.br/assuntos/legislacao/legislacao-1/resolucoes/resolucoes-2013/resolucao-no-280-de-11-07-2013</a>
. Acesso em 30/11/22
</p> 

      </Container>
    );
  }
}

 
export default InformacoesParaMedicos;
