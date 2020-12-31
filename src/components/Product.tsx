import React from "react";
import dayjs from "dayjs";
import { Product } from "../types/product";
import PriceComponent from "./Price";

type ProductComponentProps = {
  product: Product;
};

const ProductComponent: React.FC<ProductComponentProps> = ({
  product: { id, images, name, description, prices },
}) => {
  return (
    <div className="col-lg-4 mb-3">
      <div className="card rounded">
        {images[0] && (
          <img
            src={images[0]}
            alt={name + " image"}
            className="card-img-top rounded-top"
            height={210}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{name + " "}</h5>
          {description ? (
            <p className="text-white-50 font-italic">{description}</p>
          ) : (
            <p className="text-white-50 font-italic">No description avaiable</p>
          )}
          <div className="d-flex flex-column">
            {prices.map((price, index) => (
              <PriceComponent price={price} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
