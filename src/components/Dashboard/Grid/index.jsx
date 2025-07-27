import React from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

function formatBillions(num) {
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(2)}B`;
  }
  if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(2)}M`;
  }
  return `$${num.toLocaleString()}`;
}

const Grid = ({ coin }) => {
  return (
    <div className="grid-container">
      <div className="info-flex">
        <img src={coin.image} className="coin-logo" />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>

      <div className="details-flex">
        <div className="chip-flex">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {coin.market_cap_change_percentage_24h > 0 ? (
              <>
                <div className="price-chip">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="profit-icon">
                  <TrendingUpIcon />
                </div>
              </>
            ) : (
              <>
                <div className="price-chip-red">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="loss-icon">
                  <TrendingDownIcon />
                </div>
              </>
            )}
          </div>
          <div className="price-holder">
            {coin.current_price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
        </div>
      </div>
      <div className="bottom-details">
        <div className="left-pane">
          <p>
            <span sx={{ fontWeight: 900 }}>Total Volume:</span> <br />
            {formatBillions(coin.total_volume)}
          </p>
          <p>
            Market Cap: <br />
            {formatBillions(coin.market_cap)}
          </p>
        </div>
        <div className="right-pane">
          <h2 className="low">
            24h Low{" "}
            {coin.low_24h.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h2>

          <h2 className="high">
            24h High{" "}
            {coin.high_24h.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Grid;
