import { Image } from "react-bootstrap";
import style from "./style.module.css";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  title: string;
  price: string;
}
const CardCustomize: React.FC<Props> = ({ image, title, price }) => {
  return (
    <div className={`${style.boxCard} mb-4`}>
      <Link to={`/product/:proId`}>
        <Image src={image} fluid className={style.imageCard} />
      </Link>
      <h5 className={style.titleCard}>{title}</h5>
      <strong className={style.priceCard}>{price}</strong>
    </div>
  );
};

export default CardCustomize;
