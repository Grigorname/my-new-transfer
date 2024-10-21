import React from "react";
import { Button } from "antd";
import "./ResultCard.css";

const ResultCard = ({
  carType,
  carImage,
  passengers,
  luggage,
  distance,
  duration,
  price,
  currency,
  onBookClick, // Новый пропс для обработки клика на кнопку "Забронировать"
}) => {
  return (
    <div className="result-card">
      <div className="result-card-header">
        <img src={carImage} alt={carType} className="car-image" />
        <h3>{carType}</h3>
      </div>
      <div className="result-card-details">
        <div>
          <span>🧑‍🤝‍🧑 x {passengers}</span>
          <span>🧳 x {luggage}</span>
        </div>
        <div>
          <p>Distance: {distance} km</p>
          <p>Duration: {duration}</p>
        </div>
        <div>
          <p>
            Price: {price} {currency}
          </p>
        </div>
        <Button type="primary" onClick={onBookClick}>
          Забронировать
        </Button>
      </div>
    </div>
  );
};

export default ResultCard;
