import React, { useState, useRef } from "react";
import { Fragment } from "react";
import Table from "react-bootstrap/Table";
import SearchPrn from "./SearchPrn";

const NewBooking = (props) => {
  const nameRef = useRef();
  const dateRef = useRef();
  const adultRef = useRef();
  const childrenRef = useRef();
  const [show, setShow] = useState(false);

  const [bookingList, setBookinList] = useState([]);

  return (
    <Fragment>
      <SearchPrn booking={bookingList} />
      {show && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>PNR</th>
              <th>Passenger Name</th>
              <th>Date Of Journey</th>
              <th>Number Of Adult</th>
              <th>Number Of Children</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{localStorage.getItem("prn")}</td>
              <td>{nameRef.current.value}</td>
              <td>{dateRef.current.value}</td>
              <td>{adultRef.current.value}</td>
              <td>{childrenRef.current.value}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </Fragment>
  );
};

export default NewBooking;