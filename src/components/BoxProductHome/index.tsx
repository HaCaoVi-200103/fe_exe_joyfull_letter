import { Col, Container, Row } from "react-bootstrap";
import CardCustomize from "../Card";
import { Product } from "../../interfaces/product";
interface Props {
  title?: string;
  data?: Product[];
}
const BoxProductHome: React.FC<Props> = ({ data, title }) => {
  return (
    <Container fluid className="mt-3 mb-3">
      <Row className="">
        <Col className="d-flex justify-content-center ">
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row className="d-flex gap-3 justify-content-center me-5 ms-5">
        {data &&
          data.map((item, index) => (
            <Col md={3}>
              <CardCustomize
                image={item.image}
                price={item.price}
                title={item.name}
                key={index}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default BoxProductHome;
