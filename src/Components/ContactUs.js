import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const ContactUs = () => {
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
            <Dropdown.Item href="contactus/adduser">SOUTH INDIAN</Dropdown.Item>
            <Dropdown.Item href="newticket">THALI</Dropdown.Item>
            <Dropdown.Item href="adduser">HOT BEVERAGES</Dropdown.Item>
            <Dropdown.Item href="adduser">NORTH INDIAN CHAT</Dropdown.Item>
            <Dropdown.Item href="adduser">SOUP</Dropdown.Item>
            <Dropdown.Item href="adduser">MANCHURIANS</Dropdown.Item>
            <Dropdown.Item href="adduser">RICE VARIETY</Dropdown.Item>
            <Dropdown.Item href="adduser">NOODLES</Dropdown.Item>
            <Dropdown.Item href="adduser">SANDWICHES</Dropdown.Item>
            <Dropdown.Item href="adduser">PIZZA</Dropdown.Item>
            <Dropdown.Item href="adduser">SABJI-MANDI</Dropdown.Item>
            <Dropdown.Item href="adduser">PANEER KA KHAJANA</Dropdown.Item>
            <Dropdown.Item href="adduser">DAL</Dropdown.Item>
            <Dropdown.Item href="adduser">TANDOOR STARTER</Dropdown.Item>
            <Dropdown.Item href="adduser">BASMATI KA KHAZANA</Dropdown.Item>
            <Dropdown.Item href="adduser">ROTI KI TOKARI</Dropdown.Item>
            <Dropdown.Item href="adduser">SALADS-PAPAD-RAITA</Dropdown.Item>
            <Dropdown.Item href="adduser">COLD BEVERAGES</Dropdown.Item>
            <Dropdown.Item href="adduser">FRESH FRUIT JUICES</Dropdown.Item>
            <Dropdown.Item href="adduser">FRESH FRUIT SHAKES</Dropdown.Item>
            <Dropdown.Item href="adduser">FRUIT-SALADS</Dropdown.Item>
            <Dropdown.Item href="adduser">ICE CREAMS</Dropdown.Item>
            <Dropdown.Item href="adduser">KIDS - SPECIAL</Dropdown.Item>
            <Dropdown.Item href="adduser">SUNDAES</Dropdown.Item>
            <Dropdown.Item href="adduser">VARIETY ICE CREAMS</Dropdown.Item>
            <Dropdown.Item href="adduser">FALOODAS</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </div>
  );
};

export default ContactUs;
