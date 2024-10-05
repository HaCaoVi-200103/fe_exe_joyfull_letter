import React, { useState } from "react";
import Layout from "../../components/Layout";
import style from "./style.module.css";
import BreadcrumbCustomize from "../../components/Breadcrumb";
import img_birthdat from "../../assets/img_birthdat.jpg";

const ProductDetail = () => {
  const [selectedSeed, setSelectedSeed] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("16x16");
  const [quantity, setQuantity] = useState<number>(1);

  const handleSeedSelection = (seed: string) => {
    setSelectedSeed((prev) =>
      prev.includes(seed)
        ? prev.filter((item) => item !== seed)
        : [...prev, seed]
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (operation: string) => {
    if (operation === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (operation === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
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
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <img
                      key={index}
                      src={img_birthdat}
                      alt={`Thumbnail ${item}`}
                      className="img-thumbnail mb-2"
                    />
                  ))}
                </div>
              </div>
              <div className="col-10">
                <img
                  src={img_birthdat}
                  alt="Birthday Card"
                  className={style.img}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className={style.productRight}>
              <h1 className="display-4">
                <strong>Birthday card</strong>
              </h1>
              <p className="lead text-muted">
                Birthday greeting cards for friends and relatives
              </p>
              <div className="product-options mt-4">
                <p className="fw-bold">Seed selection:</p>
                <div className="form-check">
                  {["Petunia", "Yellow Cotton Tree", "Marigold"].map((seed) => (
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

                <p className="fw-bold mt-3">Size:</p>
                {["16x16", "16x24"].map((size) => (
                  <div key={size} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={() => handleSizeChange(size)}
                    />
                    <label className="form-check-label">{size}</label>
                  </div>
                ))}

                <p className="fw-bold mt-3">Quantity:</p>
                <div className={style.quantity_control}>
                  <button
                    className="dec"
                    onClick={() => handleQuantityChange("decrease")}
                  >
                    -
                  </button>
                  <input type="text" value={quantity} readOnly />
                  <button
                    className="inc"
                    onClick={() => handleQuantityChange("increase")}
                  >
                    +
                  </button>
                </div>

                <div className="price mb-3">
                  <span className="fw-bold">Price:</span>{" "}
                  <span className="fs-4">25.000VND</span>
                </div>

                <div className="d-flex gap-3">
                  <button className="btn btn-outline-primary">
                    Add to cart
                  </button>
                  <button className="btn btn-warning">Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
