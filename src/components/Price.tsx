import React from "react";
import { useBuy } from "../api/buy";
import { useMutation } from "react-query";
import { Price } from "../types/product";

type PriceComponentProps = {
  price: Price;
  index: number;
};

const PriceComponent: React.FC<PriceComponentProps> = ({ price, index }) => {
  const buyMutation = useBuy();

  const handleBuy = (price_id: string) => {
    buyMutation.mutate(price_id);
  };

  return (
    <div className="d-flex flex-column mb-3">
      <button
        disabled={buyMutation.isLoading}
        type="button"
        onClick={() => handleBuy(price.id)}
        className={index === 0 ? "btn btn-primary" : "btn btn-secondary"}
      >
        {buyMutation.isLoading && (
          <i
            className="fa fa-spinner fa-spin"
            role="status"
            aria-hidden="true"
          ></i>
        )}
        {buyMutation.isLoading
          ? " Loading"
          : `Buy $${price.unit_amount
              .toString()
              .slice(0, -2)}.${price.unit_amount.toString().slice(-2)} / ${
              price.recurring.interval
            }`}
      </button>
    </div>
  );
};

export default PriceComponent;
