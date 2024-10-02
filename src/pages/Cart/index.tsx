import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import BoxCard from "../../components/BoxCart";
const Cart = () => {
  return (
    <Layout>
      <Container fluid className="mt-4 mb-4">
        <Row>
          <Col md={6}>
            <BoxCard
              quantity={4}
              name="Anniversary Card"
              price={3.4}
              image="https://media.istockphoto.com/id/1400628312/vector/a-blank-sheet-of-white-paper-in-a-yellow-envelope-a-copy-space-template.jpg?s=612x612&w=0&k=20&c=v6lwMwXS8R_l1rRPKPxs6DXhyVKB4Yj3pgtbL5gKTZI="
            />
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Cart;
