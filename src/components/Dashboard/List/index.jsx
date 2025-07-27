import React, { memo } from "react";
import "./style.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const imageCellSx = {
  width: 20,
  minWidth: 20,
  maxWidth: 20,
  padding: "8px",
  textAlign: "center",
  display: "flex",
  gap: "20px",
};

const infoCellSx = {
  width: "auto",
  paddingLeft: "10px",
};

const ListComponent = memo(({ coin }) => {
  if (!coin) {
    return null;
  }
  
  const formatPrice = (price) => {
    if (typeof price !== 'number' || isNaN(price)) return '$0.00';
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const formatPercentage = (percentage) => {
    if (typeof percentage !== 'number' || isNaN(percentage)) return '0.00';
    return percentage.toFixed(2);
  };

  const priceChangePercentage = coin.price_change_percentage_24h || 0;
  const marketCapChangePercentage = coin.market_cap_change_percentage_24h || 0;
  const isPositiveChange = marketCapChangePercentage > 0;

  return (
    <TableRow>
      <TableCell sx={imageCellSx}>
        <div className="first-column">
          <img
            src={coin.image || '/placeholder-coin.png'}
            alt={coin.name || 'Cryptocurrency'}
            width="50"
            height="50"
            loading="lazy"
            style={{ borderRadius: "50%" }}
            onError={(e) => {
              e.target.src = '/placeholder-coin.png';
            }}
          />
          <div>
            <p className="coin-symbol">{coin.symbol?.toUpperCase() || 'N/A'}</p>
            <p className="coin-name">{coin.name || 'Unknown'}</p>
          </div>
        </div>
      </TableCell>
      <TableCell sx={infoCellSx}>
        <div className="details-flex">
          <div className="chip-flex">
            <div
              style={{ display: "flex", alignItems: "center", gap: "4rem" }}
            >
              {isPositiveChange ? (
                <>
                  <div className="price-chip">
                    {formatPercentage(priceChangePercentage)}%
                  </div>
                  <div className="profit-icon">
                    <TrendingUpIcon />
                  </div>
                </>
              ) : (
                <>
                  <div className="price-chip-red">
                    {formatPercentage(priceChangePercentage)}%
                  </div>
                  <div className="loss-icon">
                    <TrendingDownIcon />
                  </div>
                </>
              )}
            </div>
            <div className="price-holder">
              {formatPrice(coin.current_price)}
            </div>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
});

ListComponent.displayName = "ListComponent";

export default ListComponent;