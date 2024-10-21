import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../core/services/firebase";

export const useBooking = () => {
  const [isBookingModalVisible, setIsBookingModalVisible] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: null,
    time: null,
  });
  const [selectedCar, setSelectedCar] = useState(null);

  const handleBookClick = (carType) => {
    setSelectedCar(carType);
    setIsBookingModalVisible(true);
  };

  const handleBooking = async () => {
    const { firstName, lastName, email, phone, date, time } = userData;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    const bookingData = {
      firstName,
      lastName,
      email,
      phone,
      carType: selectedCar,
      date,
      time,
    };

    try {
      await addDoc(collection(db, "banantsTaxi"), bookingData);
      alert("Бронирование успешно!");
      setIsBookingModalVisible(false);
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: null,
        time: null,
      });
    } catch (error) {
      console.error("Ошибка при бронировании:", error);
      alert("Ошибка при бронировании, попробуйте снова.");
    }
  };

  return {
    isBookingModalVisible,
    setIsBookingModalVisible,
    userData,
    setUserData,
    handleBookClick,
    handleBooking,
  };
};
