import { Col, Container, Row } from "react-bootstrap";
import CardCustomize from "../Card";
interface Props {
  title?: string;
  data?: [];
}
const BoxProductHome: React.FC<Props> = ({ data, title }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        {data && data.map((item, index) => <CardCustomize key={index} />)}
      </Row>
    </Container>
  );
};
export default BoxProductHome;
