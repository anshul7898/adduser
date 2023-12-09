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
  const navigateToRiceVariety = () => {
    navigate("/ricevariety");
  };
  const navigateToNoodles = () => {
    navigate("/noodles");
  };
  const navigateToSandwiches = () => {
    navigate("/sandwiches");
  };
  const navigateToPizza = () => {
    navigate("/pizza");
  };
  const navigateToSabjiMandi = () => {
    navigate("/sabjimandi");
  };
  const navigateToPaneerkaKhajana = () => {
    navigate("/paneerkakhajana");
  };  
  const navigateToDal = () => {
    navigate("/dal");
  };  
  const navigateToTandoorStarter = () => {
    navigate("/tandoorstarter");
  };  
  const navigateToBasmatiKaKhazana = () => {
    navigate("/basmatikakhazana");
  }; 
  const navigateToRotiKiTokari = () => {
    navigate("/rotikitokari");
  }; 
  const navigateToSaladPapadRaita = () => {
    navigate("/saladpapadraita");
  }; 
  const navigateToColdBeverages = () => {
    navigate("/coldbeverages");
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
            <Dropdown.Item onClick={navigateToRiceVariety}>RICE VARIETY</Dropdown.Item>
            <Dropdown.Item onClick={navigateToNoodles}>NOODLES</Dropdown.Item>
            <Dropdown.Item onClick={navigateToSandwiches}>SANDWICHES</Dropdown.Item>
            <Dropdown.Item onClick={navigateToPizza}>PIZZA</Dropdown.Item>
            <Dropdown.Item onClick={navigateToSabjiMandi}>SABJI-MANDI</Dropdown.Item>
            <Dropdown.Item onClick={navigateToPaneerkaKhajana}>PANEER KA KHAJANA</Dropdown.Item>
            <Dropdown.Item onClick={navigateToDal}>DAL</Dropdown.Item>
            <Dropdown.Item onClick={navigateToTandoorStarter}>TANDOOR STARTER</Dropdown.Item>
            <Dropdown.Item onClick={navigateToBasmatiKaKhazana}>BASMATI KA KHAZANA</Dropdown.Item>
            <Dropdown.Item onClick={navigateToRotiKiTokari}>ROTI KI TOKARI</Dropdown.Item>
            <Dropdown.Item onClick={navigateToSaladPapadRaita} >SALADS-PAPAD-RAITA</Dropdown.Item>
            <Dropdown.Item onClick={navigateToColdBeverages}>COLD BEVERAGES</Dropdown.Item>
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
