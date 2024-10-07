import { Col, Container, Image, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import Poster from "../../assets/poster.png";
import ButtonCustomize from "../../components/Button";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import BoxProductHome from "../../components/BoxProductHome";
import { data } from "../../data";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Container fluid>
        <Row className={style.boxPoster}>
          <Col className="p-0">
            <Image src={Poster} fluid />
          </Col>
          <Col
            onClick={() => navigate("/store")}
            className={`${style.boxButton}`}
          >
            <ButtonCustomize size="lg" title="Go To Store" />
          </Col>
        </Row>
        <Row>
          <BoxProductHome title="New Product" data={data} />
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
