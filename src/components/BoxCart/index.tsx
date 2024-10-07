import { Button, Col, Image, Row } from "react-bootstrap";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
interface Props {
  image: string;
  price: number;
  quantity: number;
  name: string;
  decription: string;
}
const BoxCard: React.FC<Props> = ({
  image,
  name,
  price,
  quantity,
  decription,
}) => {
  const [quant, setQuant] = useState<number>(quantity);
  const [priceFollowQ, setPriceFollowQ] = useState<number>(price * quantity);

  useEffect(() => {
    setPriceFollowQ(quant * price);
  }, [quant, price]);
  return (
    <Row className={style.boxContainerBoxCart}>
      <MdDeleteForever className={style.removeCart} />
      <Col md={3} className="p-0">
        <Image className={style.imageBoxCart} src={image} fluid />
      </Col>
      <Col md={6} className="mt-2">
        <h5>{name}</h5>
        <p className={style.decriptionCart}>{decription}</p>
        <div className={style.priceProduct}>{price} $</div>
      </Col>
      <Col
        className="d-flex flex-column mt-2 mb-2 justify-content-around align-items-end"
        md={3}
      >
        <Row>
          <strong>{priceFollowQ.toFixed(1)} $</strong>
        </Row>
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
      </Col>
    </Row>
  );
};

export default BoxCard;
