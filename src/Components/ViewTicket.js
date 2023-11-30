import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AppHeader from "./AppHeader";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const ViewTicket = () => {
  const [showCancelBtn, setShowCancelBtn] = useState(false);

  let retString = localStorage.getItem("bookingInfo");
  let bookingInfo = JSON.parse(retString);
  let status = bookingInfo.status;
  const navigate = useNavigate();
  useEffect(() => {
    if (status === "Approved") {
      setShowCancelBtn(true);
    } else {
      setShowCancelBtn(false);
    }
  });

  const navigateToNewTicket = () => {
    navigate("/newticket");
  };

  return (
    <>
      <AppHeader />
      <br />
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Room booked successfully.
      </h1>
      <br />
      <br />
      <Card
        style={{
          width: "auto",
          position: "absolute",
          top: "65%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#0d6dfd",
        }}
      >
        <Card.Header className="text-center card text-white bg-primary">
          <h5>Booking Details </h5>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <b>Booking ID:</b> {bookingInfo.prn}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Guest Name:</b> {bookingInfo.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Check-In Date:</b> {bookingInfo.date}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Number Of Adult:</b> {bookingInfo.adult}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Number Of Children:</b> {bookingInfo.child}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Total Amount:</b> {bookingInfo.cost}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Status:</b> {bookingInfo.status}
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <div className="text-center">
        <Button
          variant="warning"
          size="md"
          active
          style={{
            width: "auto",
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
         onClick={navigateToNewTicket}>
          Back
        </Button>
      </div>
      <br />

      {showCancelBtn && (
        <div className="text-center">
          <Button variant="outline-warning" size="md" active>
            <Link to="/cancelticket">Cancel Ticket</Link>
          </Button>
        </div>
      )}
      <br />
      <br />
    </>
  );
};

export default ViewTicket;
