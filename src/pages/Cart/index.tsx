import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import BoxCard from "../../components/BoxCart";
import BoxTotalCart from "../../components/BoxTotalCart";
import BreadcrumbCustomize from "../../components/Breadcrumb";
const Cart = () => {
  return (
    <Layout>
      <Container fluid className="mt-4 mb-4">
        <Row className="ms-3">
          <BreadcrumbCustomize />
        </Row>
        <Row>
          <Col md={6}>
            <Row
              style={{
                margin: "10px 20px",
                borderBottom: "1px solid",
                borderColor: "rgb(226, 226, 226)",
              }}
            >
              <Col className="">
                <h5>Information Order</h5>
              </Col>
            </Row>
            <Row style={{ margin: "10px 20px" }}>
              <Col className="">
                <p>
                  You have <strong>4 products</strong> in your cart
                </p>
              </Col>
            </Row>
            <BoxCard
              decription=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quod repellendus aliquam atque iste? Veniam delectus vitae, doloribus
          neque, provident accusamus debitis eum odio minima iste corrupti
          dolor, maiores ipsam."
              quantity={4}
              name="Anniversary Card"
              price={3.4}
              image="https://media.istockphoto.com/id/1400628312/vector/a-blank-sheet-of-white-paper-in-a-yellow-envelope-a-copy-space-template.jpg?s=612x612&w=0&k=20&c=v6lwMwXS8R_l1rRPKPxs6DXhyVKB4Yj3pgtbL5gKTZI="
            />
          </Col>
          <Col md={4} className="mt-3">
            <BoxTotalCart total={200} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Cart;
