import { useState } from "react";
import Layout from "../../components/Layout";
import style from "./style.module.css";
import BreadcrumbCustomize from "../../components/Breadcrumb";
import img_dep from "../../assets/img_dep.jpg";
import img_bd from "../../assets/img_bd.jpg";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const [selectedSeed, setSelectedSeed] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [mainImage, setMainImage] = useState<string>(img_dep);
  const [showProductInfo, setShowProductInfo] = useState<boolean>(true);

  const productInfo = {
    material: "Giấy tái chế từ vở/ sách cũ",
    design: "Thủ công, thân thiện với môi trường, có hạt giống bên trong",
    brand: "Joyfull Letter",
    madeIn: "Việt Nam",
    highlight: 'Thiết kế độc đáo, có hạt giống, được tạo bởi "Mầm"',
    size: "16x22",
  };

  const handleSeedSelection = (seed: string) => {
    setSelectedSeed((prev) =>
      prev.includes(seed)
        ? prev.filter((item) => item !== seed)
        : [...prev, seed]
    );
  };

  const showWarning = () => {
    toast.warning("Quantity must be greater than 0");
  };

  const handleQuantityChange = (operation: string) => {
    if (operation === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (operation === "decrease") {
      if (quantity <= 1) {
        showWarning();
      } else {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  return (
    <Layout>
      <div className={`container my-5 ${style.productDetail}`}>
        <div className="breadcrumbs mb-3">
          <BreadcrumbCustomize />
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-2">
                <div
                  className={`thumbnails d-flex flex-column ${style.thumbnails}`}
                >
                  {[img_bd, img_dep, img_bd, img_dep, img_bd, img_dep].map(
                    (item, index) => (
                      <img
                        key={index}
                        src={img_bd}
                        alt={`Thumbnail ${item + 1}`}
                        className="img-thumbnail mb-2"
                        onClick={() => setMainImage(item)}
                      />
                    )
                  )}
                </div>
              </div>
              <div className="col-10">
                <img
                  src={mainImage}
                  alt="Birthday Card"
                  className={style.img}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className={style.productRight}>
              <h1 className={style.content}>
                Birthday greeting cards for friends and relatives
              </h1>

              <div className="mb-3">
                <span className={style.discount}>-10%</span>
                <span className={style.price}>25.000VND</span>
              </div>

              <div className={`mb3 ${style.type}`}>
                <div>
                  <h5 className={style.lhat}>LOẠI HẠT:</h5>
                </div>
                <div className="form-check">
                  {["Dạ yến thảo", "Gáo vàng", "Sao nhái"].map((seed) => (
                    <div key={seed} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={seed}
                        checked={selectedSeed.includes(seed)}
                        onChange={() => handleSeedSelection(seed)}
                      />
                      <label className="form-check-label">{seed}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className={style.quantity_control}>
                <div>
                  <button
                    className={style.dec}
                    onClick={() => handleQuantityChange("decrease")}
                  >
                    -
                  </button>
                  <input type="text" value={quantity} readOnly />
                  <button
                    className={style.inc}
                    onClick={() => handleQuantityChange("increase")}
                  >
                    +
                  </button>
                  <button className={style.addCart}>ADD TO CART</button>
                </div>
              </div>
              <div className="mb-3">
                <div
                  className={style.infoHeader}
                  onClick={() => setShowProductInfo(!showProductInfo)}
                >
                  <h5 className={style.info}>THÔNG TIN SẢN PHẨM:</h5>
                  <button className={style.toggleButton}>
                    {showProductInfo ? "-" : "+"}
                  </button>
                </div>
                {showProductInfo && (
                  <div className={style.infoD}>
                    <p>- Chất liệu: {productInfo.material} </p>
                    <p>- Thiết kế: {productInfo.design} </p>
                    <p>- Kích thước: {productInfo.size} </p>
                    <p>- Thương hiệu: {productInfo.brand} </p>
                    <p>- Đặc điểm nổi bật: {productInfo.highlight} </p>
                    <p>- Sản xuất tại: {productInfo.madeIn} </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
