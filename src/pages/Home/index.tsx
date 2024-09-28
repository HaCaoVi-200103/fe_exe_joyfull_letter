import { Col, Container, Image, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import Poster from "../../assets/poster.png";
import ButtonCustomize from "../../components/Button";
import style from "./style.module.css";
const Home = () => {
  return (
    <Layout>
      <Container fluid>
        <Row className={style.boxPoster}>
          <Col className="p-0">
            <Image src={Poster} fluid />
          </Col>
          <Col className={`${style.boxButton}`}>
            <ButtonCustomize size="lg" title="Go To Store" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
