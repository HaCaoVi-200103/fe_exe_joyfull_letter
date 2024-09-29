import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import { data } from "../../data";
import CardCustomize from "../../components/Card";
import BreadcrumbCustomize from "../../components/Breadcrumb";
import DropdownCustomize from "../../components/Dropdown";
const Store = () => {
  return (
    <Layout>
      <Container className="mt-3 ">
        <Row className="mb-3">
          <Col className="d-flex justify-content-center ">
            <h1>All Product</h1>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="d-flex justify-content-start">
            <BreadcrumbCustomize />
          </Col>
          <Col className="d-flex justify-content-center gap-5">
            <div className="d-flex align-items-center gap-3">
              <strong>Filter by:</strong>
              <DropdownCustomize
                toggole="All Product"
                menuItem={["All Product", "Basic", "Medium", "Luxury"]}
              />
            </div>
            <div className="d-flex align-items-center gap-3">
              <strong>Sort by:</strong>
              <DropdownCustomize
                toggole="Featured"
                menuItem={[
                  "Featured",
                  "Best Saling",
                  "A - Z",
                  "Z - A",
                  "Price: Low to High",
                  "Price: High to Low",
                ]}
              />
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-start ">
          {data &&
            data.map((item, index) => (
              <Col key={index} md={3}>
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
    </Layout>
  );
};

export default Store;
