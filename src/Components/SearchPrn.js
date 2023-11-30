import React, { useRef, Fragment, useState } from "react";
import AppHeader from "./AppHeader";
import Card from "../UI/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import classes from "./AddUser.module.css";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const SearchPrn = () => {
  const [searchPrn, setSearchPrn] = useState(false);
  let flag = 1;
  const navigate = useNavigate();
  const prnRef = useRef();
  const [userType, setUserType] = useState(localStorage.getItem("type"));

  const navigateToNewTicket = () => {
    navigate("/newticket");
  };

  const navigateToList = () => {
    navigate("/admin");
  };

  const searchHandler = (event) => {
    event.preventDefault();
    let retString = localStorage.getItem("userList");
    if (!retString) return;
    let storageList = JSON.parse(retString);
    console.log(prnRef.current.value);
    for (let i = 0; i < storageList.length; i++) {
      if (
        storageList[i].prn === prnRef.current.value &&
        (storageList[i].login === localStorage.getItem("loginName") ||
          localStorage.getItem("type") === "admin")
      ) {
        localStorage.setItem("searchedPrn", prnRef.current.value);
        prnRef.current.value = "";
        const store = {
          name: storageList[i].name,
          date: storageList[i].date,
          adult: storageList[i].adult,
          child: storageList[i].child,
          prn: storageList[i].prn,
          cost: storageList[i].cost,
          status: storageList[i].status,
          id: storageList[i].id,
          SearchedId: i,
        };
        localStorage.setItem("searchData", JSON.stringify(store));
        flag = 1;
        navigate("/viewsearchedticket");
        break;
      } else {
        flag = 0;
      }
    }
    if (flag === 0) {
      setSearchPrn(true);
    }
  };

  const closeErrorModal = () => {
    setSearchPrn(false);
  };

  return (
    <Fragment>
      <AppHeader />
      <Card className={classes.input}>
        <form onSubmit={searchHandler}>
          <label htmlFor="prn">Booking ID</label>
          <input id="prn" type="text" ref={prnRef} />
          <Button type="submit">Search Booking</Button>
          {userType === "admin" && (
            <Button
              className="ms-2"
              variant="secondary"
              onClick={navigateToList}
            >
              Show all Booking
            </Button>
          )}
          <br />
          <Modal size="md" show={searchPrn} onHide={closeErrorModal}>
            <Modal.Header closeButton>
              <Modal.Title>Wrong Booking ID</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Alert variant="danger" className="danger">
                Please enter correct Booking ID!
              </Alert>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeErrorModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <hr />
          {userType !== "admin" && (
            <Button variant="warning" onClick={navigateToNewTicket}>
              New Booking
            </Button>
          )}
        </form>
      </Card>
    </Fragment>
  );
};

export default SearchPrn;
