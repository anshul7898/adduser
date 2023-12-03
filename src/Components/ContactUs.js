import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
  const navigate = useNavigate();
  const navigateToNewTicket = () => {
    navigate("/adduser");
  };
  const navigateToSearchPrn = () => {
    navigate("/searchprn");
  };
  const navigateToCancelTicket = () => {
    navigate("/cancelticket");
  };
  const navigateToBookingList = () => {
    navigate("/bookinglist");
  };
  const navigateToSoup = () => {
    navigate("/soup");
  };
  const navigateToManchurians = () => {
    navigate("/manchurians");
  };
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?cs=srgb&dl=pexels-pixabay-326281.jpg&fm=jpg")',
        height: "130vh",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
            <h1 style={{
              color: "yellow",
              textAlign: "center",
              paddingTop: "50px"
          }}>Welcome to Shree Ganesh Sagar</h1>
        <Dropdown style={{
              textAlign: "center",
          }}
          >
          <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
            Please Select the Cuisine
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={navigateToNewTicket}>SOUTH INDIAN</Dropdown.Item>
            <Dropdown.Item onClick={navigateToSearchPrn}>THALI</Dropdown.Item>
            <Dropdown.Item onClick={navigateToCancelTicket}>HOT BEVERAGES</Dropdown.Item>
            <Dropdown.Item onClick={navigateToBookingList}>NORTH INDIAN CHAT</Dropdown.Item>
            <Dropdown.Item onClick={navigateToSoup}>SOUP</Dropdown.Item>
            <Dropdown.Item onClick={navigateToManchurians}>MANCHURIANS</Dropdown.Item>
            <Dropdown.Item >RICE VARIETY</Dropdown.Item>
            <Dropdown.Item >NOODLES</Dropdown.Item>
            <Dropdown.Item >SANDWICHES</Dropdown.Item>
            <Dropdown.Item >PIZZA</Dropdown.Item>
            <Dropdown.Item >SABJI-MANDI</Dropdown.Item>
            <Dropdown.Item >PANEER KA KHAJANA</Dropdown.Item>
            <Dropdown.Item >DAL</Dropdown.Item>
            <Dropdown.Item >TANDOOR STARTER</Dropdown.Item>
            <Dropdown.Item >BASMATI KA KHAZANA</Dropdown.Item>
            <Dropdown.Item >ROTI KI TOKARI</Dropdown.Item>
            <Dropdown.Item >SALADS-PAPAD-RAITA</Dropdown.Item>
            <Dropdown.Item >COLD BEVERAGES</Dropdown.Item>
            <Dropdown.Item >FRESH FRUIT JUICES</Dropdown.Item>
            <Dropdown.Item >FRESH FRUIT SHAKES</Dropdown.Item>
            <Dropdown.Item >FRUIT-SALADS</Dropdown.Item>
            <Dropdown.Item >ICE CREAMS</Dropdown.Item>
            <Dropdown.Item >KIDS - SPECIAL</Dropdown.Item>
            <Dropdown.Item >SUNDAES</Dropdown.Item>
            <Dropdown.Item >VARIETY ICE CREAMS</Dropdown.Item>
            <Dropdown.Item >FALOODAS</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </div>
  );
};

export default ContactUs;
