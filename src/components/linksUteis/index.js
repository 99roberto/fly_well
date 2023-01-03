import Carousel from 'react-bootstrap/Carousel';
import { AppName, SubTitulo } from '../../constantes';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SlideQuestionario from '../SlideQuestionario';

function Linksuteis() {
  return (
    <>
    <Container>

    <SlideQuestionario titulo={"Informações úteis"}></SlideQuestionario>

    <br></br>
    <p>
    EMPRESA BRASILEIRA DE INFRAESTRUTURA AEROPORTUÁRIA. <b>Tudo o que você precisa fazer para ter uma boa viagem:</b> guia do passageiro. Brasília: Infraero, 2014. Disponível em: <a href='http://www.infraero.gov.br/images/stories/guia/2014/guiapassageiro2014_portugues.pdf'>
    http://www.infraero.gov.br/images/stories/guia/2014/guiapassageiro2014_portugues.pdf
    </a>. Acesso em: 15 fev. 2016.

    </p>

    <p>
CONSELHO FEDERAL DE MEDICINA; FACULDADE DE CIÊNCIAS MÉDICAS DA SANTA CASA DE SÃO PAULO. <b>Doutor, posso viajar de avião?  Cartilha de Medicina Aeroespacial</b> . Brasília: Conselho Federal de Medicina, 2011. <a href='http://portal.cfm.org.br/images/stories/pdf/cartilha_medicina_aeroespacialfinal2.pdf'>
http://portal.cfm.org.br/images/stories/pdf/cartilha_medicina_aeroespacialfinal2.pdf
</a>
      
    </p>


    <p>
TELESSAÚDE-RS. Perguntas da Semana. <b>Gestantes podem viajar de avião? </b> Teleconsultoria respondida por: Marcos Vinícius Ambrosini Mendonça. Disponível em: <a href='https://www.ufrgs.br/telessauders/perguntas/gestantes-podem-viajar-de-aviao/'>
https://www.ufrgs.br/telessauders/perguntas/gestantes-podem-viajar-de-aviao/
</a>. Acesso em 30/11/22
      
    </p>


    <p>
<b>Dicas de acessibilidade.</b> AGÊNCIA NACIONAL DE AVIAÇÃO CIVIL (ANAC). Disponível em: <a href='https://www.gov.br/anac/pt-br/assuntos/passageiros/arquivos/dicas_anac_acessibilidade_web.pdf'>
https://www.gov.br/anac/pt-br/assuntos/passageiros/arquivos/dicas_anac_acessibilidade_web.pdf
</a>. Acesso em 30/11/22      
    </p>

 
      </Container>
    </>
  );
}
export default Linksuteis;
