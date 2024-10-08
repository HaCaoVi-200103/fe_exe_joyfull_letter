import { Col, Form, Row } from "react-bootstrap";
import style from "./style.module.css";
import { useState } from "react";
import AddressSelect from "../AddressSelect";
const DeliveryInformation = () => {
  const [checkAddQR, setCheckAddQR] = useState(false);
  const [checkWrite, setCheckWrite] = useState(false);
  return (
    <Form className={style.boxForm}>
      <Row>
        <Col className="p-0">
          <h5>Delivery information</h5>
        </Col>
      </Row>
      <Row>
        <Row className="mb-2">
          <Form.Group as={Col} className="p-0" controlId="validationCustom01">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Full name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2 d-flex justify-content-between">
          <Form.Group
            as={Col}
            className="p-0"
            md="7"
            controlId="validationCustom02"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            className="p-0"
            md="4"
            controlId="validationCustom03"
          >
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Phone number"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-2">
          <Form.Group as={Col} className="p-0" controlId="validationCustom06">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Address"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} className="p-0" controlId="validationCustom07">
            <Form.Label>Note</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Note"
              as="textarea"
              rows={2}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <AddressSelect />
        <Row hidden={!checkAddQR} className="mb-2">
          <Form.Group as={Col} className="p-0" controlId="validationCustom04">
            <Form.Label>QR</Form.Label>
            <Form.Control required type="file" />
            <Form.Text className="text-muted">Video, voice, image</Form.Text>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row hidden={!checkWrite} className="mb-2">
          <Form.Group as={Col} className="p-0" controlId="validationCustom05">
            <Form.Label>Your message</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Send your love here"
              defaultValue=""
            />
            <Form.Text className="text-muted">Video, voice, image</Form.Text>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-2 p-0">
            <Form.Check
              onClick={() => setCheckAddQR(!checkAddQR)}
              label="Do you want to create a QR code to send to your loved one?"
              defaultChecked={checkAddQR}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-2 p-0">
            <Form.Check
              onClick={() => setCheckWrite(!checkWrite)}
              label="Would you like us to write that message for you?"
              defaultChecked={checkWrite}
            />
          </Form.Group>
        </Row>
      </Row>
    </Form>
  );
};

export default DeliveryInformation;
