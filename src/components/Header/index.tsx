import { Col, Container, Image, Row } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { BsSearchHeart } from "react-icons/bs";
import { TbShoppingBagHeart } from "react-icons/tb";
import style from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  return (
    <Container fluid className={`${style.containerHeader} `}>
      <Row className={`${style.boxLogo}`}>
        <Col>
          <Image src={Logo} fluid width={"100px"} />
        </Col>
      </Row>
      <Row className={`${style.boxNavigate}`}>
        <Col>
          <NavLink className={style.routeName} to={"/"}>
            Home
          </NavLink>
        </Col>
        <Col>
          <NavLink className={style.routeName} to={"/store"}>
            Store
          </NavLink>
        </Col>
        <Col>
          <NavLink className={style.routeName} to={"/about"}>
            About
          </NavLink>
        </Col>
        <Col>
          <NavLink className={style.routeName} to={"/contact"}>
            Contact
          </NavLink>
        </Col>
      </Row>
      <Row className={`${style.boxIcon}`}>
        <Col className={style.itemIcon1}>
          <BsSearchHeart className={style.icon} />
        </Col>
        <Col className={style.itemIcon2}>
          <TbShoppingBagHeart className={style.icon} />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
