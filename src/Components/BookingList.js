import Button from "react-bootstrap/Button";
import classes from "./AddUser.module.css";
import StatusContext from "../store/status-context";
import { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import AppHeader from "./AppHeader";
import { MDBTableHead } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const BookingList = () => {
  const ctx = useContext(StatusContext);
  const navigate = useNavigate();
  let retString = localStorage.getItem("userList");
  let storageList = JSON.parse(retString);
  const [checkList, setCheckList] = useState(storageList);

  const changeStatusApprove = (id) => {
    storageList.map((user) => {
      if (user.id === id) {
        user.status = "Approved";
        localStorage.setItem("userList", JSON.stringify(storageList));
        navigate("/admin");
        return;
      }
    });
  };

  const changeStatusReject = (id) => {
    storageList.map((user) => {
      if (user.id === id) {
        user.status = "Rejected";
        localStorage.setItem("userList", JSON.stringify(storageList));
        navigate("/admin");
        return;
      }
    });
  };
  const isLogin = localStorage.getItem("isLogin");
  const type = localStorage.getItem("type");
  var flag = false;
  if (isLogin == 1 && type == "admin") {
    flag = true;
    console.log(flag)
  }
  return (
    <>
      <AppHeader />
      {flag && (
        <Table stripped bordered hover>
          <MDBTableHead dark>
            <tr>
              <th>Booking ID</th>
              <th>Guest Name</th>
              <th width="15%">Check-In Date</th>
              <th>Adult</th>
              <th>Child</th>
              <th width="15%">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </MDBTableHead>
          <tbody>
            {storageList?.map((user) => (
              <tr key={user.id}>
                <td>{user.prn}</td>
                <td>{user.name}</td>
                <td width="15%">{user.date}</td>
                <td>{user.adult}</td>
                <td>{user.child}</td>
                <td width="15%">{user.status}</td>
                {user.status === "Pending" && (
                  <td className="text-center">
                    {" "}
                    <Button
                      variant="warning"
                      onClick={() => changeStatusApprove(user.id)}
                    >
                      Approve
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => changeStatusReject(user.id)}
                    >
                      Reject
                    </Button>
                  </td>
                )}
                {user.status === "Approved" && <td></td>}
                {user.status === "Rejected" && <td></td>}
              </tr>
            ))}
          </tbody>
        </Table>
      ) }

      {checkList === null && (
        <div className={classes.noDataFound}>No bookings yet</div>
      )}
 
      {/* <Card className={classes.buttonAlign}>
        <div className="row">
          <div className="col">
            <Button variant="success" onClick={ctx.onchangeApprove}>
              Approve All
            </Button>
          </div>
          <div className="col">
            <Button variant="danger" onClick={ctx.onchangeCancel}>
              Reject All
            </Button>
          </div>
        </div>
      </Card> */}
    </>
  );
};

export default BookingList;
