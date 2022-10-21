import Carousel from 'react-bootstrap/Carousel';
import { AppName, SubTitulo } from '../../constantes';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Linksuteis() {
  return (
    <>
    <Container>
      <p>
        IATA. International Air Transport Association. Medical Manual, 12th Edition ISBN 978-92-9264-250-1 All rights
        reserved. Montreal—Geneva. -{' '}
        <a href="https://www.medicaltourismtraining.com/wp-content/uploads/2020/09/IATA-Medical-Manual-2020.pdf">
          {'<https://www.medicaltourismtraining.com/wp-content/uploads/2020/09/IATA-Medical-Manual-2020.pdf'}
        </a>
      </p>
      <br />
      <p>
        CONSELHO FEDERAL DE MEDICINA; FACULDADE DE CIÊNCIAS MÉDICAS DA SANTA CASA DE SÃO PAULO. *Doutor, posso viajar de
        avião? Cartilha de Medicina Aeroespacial. Brasília: Conselho Federal de Medicina, 2011. Disponível em:{' '}
        <a href="http://portal.cfm.org.br/images/stories/pdf/cartilha_medicina_aeroespacialfinal2.pdf">
          {'<*http://portal.cfm.org.br/images/stories/pdf/cartilha_medicina_aeroespacialfinal2.pdf**'}
        </a>
        >.
      </p>
      <br />
      <p>
        EMPRESA BRASILEIRA DE INFRAESTRUTURA AEROPORTUÁRIA. *Tudo o que você precisa fazer para ter uma boa viagem*:
        guia do passageiro. Brasília: Infraero, 2014. Disponível em:{' '}
        <a href="http://www.infraero.gov.br/images/stories/guia/2014/guiapassageiro2014_portugues.pdf">
          {'<**http://www.infraero.gov.br/images/stories/guia/2014/guiapassageiro2014_portugues.pdf**>'}
        </a>
        . Acesso em: 15 fev. 2016.
      </p>
      <br />
      </Container>
    </>
  );
}
export default Linksuteis;
