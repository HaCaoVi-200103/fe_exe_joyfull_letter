import { Col, Container, Row } from "react-bootstrap";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { CgCopyright } from "react-icons/cg";
const Footer = () => {
  return (
    <Container fluid className={`${style.containerFooter}`}>
      <Row className={`${style.introductFooter}`}>
        <Row>
          <Row>
            <Col>
              <h5>JOYFULL LETTER</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                The letter-writing shop specializes in creating and sending
                handwritten letters, offering a personal touch for occasions.
                Each letter is designed to convey heartfelt messages.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <NavLink to={"/about"}>read more</NavLink>
            </Col>
          </Row>
        </Row>

        <Row>
          <Row>
            <h5>Social</h5>
          </Row>
          <Row>
            <Col>
              <FaFacebook />
              <AiFillInstagram />
              <FaYoutube />
              <FaTwitterSquare />
            </Col>
          </Row>
        </Row>
      </Row>
      <Row>
        <Col>
          <h5>My Team:</h5>
        </Col>
        <Col>
          <h5>Cao Vi</h5>
          <h5>Quoc Hao</h5>
          <h5>Huynh Huong</h5>
          <h5>My Dieu</h5>
          <h5>Uyen Quan</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Copyright <CgCopyright />
            2024 by Joyfull Letter Team
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
