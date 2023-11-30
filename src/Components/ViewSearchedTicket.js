import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import AppHeader from "./AppHeader";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import StatusContext from "../store/status-context";

const ViewSearchedTicket = () => {
  const [showCancelBtn, setShowCancelBtn] = useState(false);
  let retString = localStorage.getItem("searchData");
  let searchData = JSON.parse(retString);
  let status = searchData.status;
  let userType = localStorage.getItem("type");
  // let SearchedId = searchData.SearchedId;
  let SearchedId = searchData.id;

  const navigate = useNavigate();
  const ctx = useContext(StatusContext);

  useEffect(() => {
    if (status === "Approved") {
      setShowCancelBtn(true);
    } else {
      setShowCancelBtn(false);
    }
  });

  const navigateToSearchPrn = () => {
    localStorage.setItem("searchedPrn", "");
    navigate("/searchprn");
  };

  const navigateToCancelTicket = () => {
    ctx.deleteId(SearchedId);
    navigate("/cancelticket");
  };

  return (
    <>
      <div className="text-center">
        <AppHeader />
        <h1>Following are your searched booking details</h1>
      </div>
      <br />
      <Card
        style={{
          width: "auto",
          position: "absolute",
          top: "61%",
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
            <b>Booking ID:</b> {searchData.prn}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Guest Name:</b> {searchData.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Check-In Date:</b> {searchData.date}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Number Of Adult:</b> {searchData.adult}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Number Of Children:</b> {searchData.child}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Total Amount:</b> {searchData.cost}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Status: </b> {searchData.status}
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
            top: "96%",
            left: "43%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={navigateToSearchPrn}
        >
          Back
        </Button>
        {(searchData.status === "Approved" && userType !== 'admin')  && (
          <Button
            variant="danger"
            size="md"
            active
            style={{
              width: "auto",
              position: "absolute",
              top: "96%",
              left: "55%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={navigateToCancelTicket}
          >
            Cancel Ticket
          </Button>
        )}
      </div>
    </>
  );
};

export default ViewSearchedTicket;
