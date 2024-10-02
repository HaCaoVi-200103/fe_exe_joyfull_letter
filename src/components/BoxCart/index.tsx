import { Button, Col, Image, Row } from "react-bootstrap";
import style from "./style.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
interface Props {
  image?: string;
  price?: number;
  quantity?: number;
  name?: string;
}
const BoxCard: React.FC<Props> = ({ image, name, price, quantity }) => {
  const [quant, setQuant] = useState<number>(quantity || 0);
  return (
    <Row className={style.boxContainerBoxCart}>
      <Col md={3} className="p-0">
        <Image className={style.imageBoxCart} src={image} fluid />
      </Col>
      <Col md={6}>
        <h5>{name}</h5>
      </Col>
      <Col
        className="d-flex flex-column  justify-content-around align-items-end"
        md={3}
      >
        <Row>
          <Col className={`${style.boxQuantity}`}>
            <Button
              onClick={() =>
                quant === 0
                  ? toast.warning("Quantity must be greater than 0")
                  : setQuant((current) => current - 1)
              }
              className={style.buttonBoxCard}
            >
              -
            </Button>
            <span className={style.quantityInput}>{quant}</span>
            <Button
              onClick={() => setQuant((current) => current + 1)}
              className={style.buttonBoxCard}
            >
              +
            </Button>
          </Col>
        </Row>
        <Row>
          <strong>{price} $</strong>
        </Row>
      </Col>
    </Row>
  );
};

export default BoxCard;
