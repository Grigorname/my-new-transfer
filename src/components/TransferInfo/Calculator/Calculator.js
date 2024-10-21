import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Select,
  Modal,
  Input,
  DatePicker,
  TimePicker,
} from "antd";
import { useTranslation } from "react-i18next";
import ResultCard from "../ResultCard/ResultCard";
import TidaFoto from "../../../core/img/tida.webp";
import ElantraFoto from "../../../core/img/elantra.jpg";
import FusionFoto from "../../../core/img/fusion.jpg";
import "./Calculator.css";
import cityKeys from "../Calculator/cities";
import cityDistances from "../Calculator/distances";
import { useBooking } from "../../../hooks/useBooking";

const { Option } = Select;

const Calculator = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [currency, setCurrency] = useState("AMD");
  const [results, setResults] = useState([]);
  const { t } = useTranslation();

  const {
    isBookingModalVisible,
    setIsBookingModalVisible,
    userData,
    setUserData,
    handleBookClick,
    handleBooking,
  } = useBooking();

  const calculateCost = () => {
    const route = `${origin}-${destination}`;
    const distance = cityDistances[route];
    if (!distance) {
      alert(t("Выберите правильные города!"));
      return;
    }

    const baseCostMap = {
      Econom: 170,
      Comfort: 230,
      Elegant: 290,
    };

    const calculatePrice = (carType) => {
      let baseCost = baseCostMap[carType];
      let totalCost = distance * baseCost;

      if (currency === "USD") {
        totalCost = totalCost / 390;
      }

      return totalCost;
    };

    const allResults = [
      {
        carType: "Econom",
        carImage: TidaFoto,
        passengers: 3,
        luggage: 2,
        price: calculatePrice("Econom").toFixed(2),
        distance,
        duration: "5 hours 45 min",
        currency,
      },
      {
        carType: "Comfort",
        carImage: ElantraFoto,
        passengers: 4,
        luggage: 3,
        price: calculatePrice("Comfort").toFixed(2),
        distance,
        duration: "5 hours 45 min",
        currency,
      },
      {
        carType: "Elegant",
        carImage: FusionFoto,
        passengers: 5,
        luggage: 3,
        price: calculatePrice("Elegant").toFixed(2),
        distance,
        duration: "5 hours 45 min",
        currency,
      },
    ];

    setResults(allResults);
  };

  const cities = cityKeys.map((city) => ({
    label: t(city),
    value: city,
  }));

  return (
    <div className="calculator">
      <h2>{t("Calculator")}</h2>

      <div>
        <label>{t("DeparturePoint")}:</label>
        <AutoComplete
          style={{ width: 200 }}
          options={cities}
          placeholder={t("Citi")}
          value={origin}
          onChange={(value) => setOrigin(value)}
          filterOption={(inputValue, option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
          }
        />
      </div>

      <div>
        <label>{t("Destination")}:</label>
        <AutoComplete
          style={{ width: 200 }}
          options={cities}
          placeholder={t("Citi")}
          value={destination}
          onChange={(value) => setDestination(value)}
          filterOption={(inputValue, option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
          }
        />
      </div>

      <div>
        <label>{t("SelectCurrency")}:</label>
        <Select value={currency} onChange={(value) => setCurrency(value)}>
          <Option value="AMD">{t("AMD")}</Option>
          <Option value="USD">{t("USD")}</Option>
        </Select>
      </div>

      <Button type="primary" onClick={calculateCost} style={{ marginTop: 20 }}>
        {t("CalculateCost")}
      </Button>

      <div className="result-section">
        {results.map((result, index) => (
          <ResultCard
            key={index}
            carType={result.carType}
            carImage={result.carImage}
            passengers={result.passengers}
            luggage={result.luggage}
            distance={result.distance}
            duration={result.duration}
            price={result.price}
            currency={result.currency}
            onBookClick={() => handleBookClick(result.carType)}
          />
        ))}
      </div>

      <Modal
        title={t("Book")}
        visible={isBookingModalVisible}
        onOk={handleBooking}
        onCancel={() => setIsBookingModalVisible(false)}
        okButtonProps={{
          disabled:
            !userData.firstName ||
            !userData.lastName ||
            !userData.email ||
            !userData.phone ||
            !userData.date ||
            !userData.time,
        }}
      >
        <Input
          placeholder={t("FirstName")}
          value={userData.firstName}
          onChange={(e) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
        />
        <Input
          placeholder={t("LastName")}
          value={userData.lastName}
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
        />
        <Input
          placeholder={t("Email")}
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <Input
          placeholder={t("Phone")}
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />

        <DatePicker
          placeholder={t("SelectDate")}
          onChange={(date) =>
            setUserData({
              ...userData,
              date: date ? date.format("YYYY-MM-DD") : null,
            })
          }
        />
        <TimePicker
          placeholder={t("SelectTime")}
          onChange={(time) =>
            setUserData({
              ...userData,
              time: time ? time.format("HH:mm") : null,
            })
          }
        />
      </Modal>
    </div>
  );
};

export default Calculator;
