import "./App.css";
import AddUser from "./Components/AddUser";
import NewBooking from "./Components/NewBooking";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/Root";
import SearchPrn from "./Components/SearchPrn";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import NewTicket from "./Components/NewTicket";
import ViewTicket from "./Components/ViewTicket";
import CancelTicket from "./Components/CancelTicket";
import StatusContext from "./store/status-context";
import React, { useState, useEffect } from "react";
import Admin from "./Components/Admin";
import ViewSearchedTicket from "./Components/ViewSearchedTicket";
import BookingList from "./Components/BookingList";
import Soup from "./Components/Soup";
import Manchurians from "./Components/Manchurians";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {  path: "adduser", element: <AddUser /> },
      {  path: "newbooking", element: <NewBooking/> },
      {  path: "searchprn", element: <SearchPrn /> },
      {  path: "bookinglist", element: <BookingList /> },
      {  path: "contactus", element: <ContactUs />},
      {  path: "newticket", element: <NewTicket /> },
      {  path: "viewticket", element: <ViewTicket /> },
      {  path: "cancelticket", element: <CancelTicket /> },
      {  path: "soup", element: <Soup /> },
      {  path: "manchurians", element: <Manchurians /> },
      {  path: "admin", element: <Admin /> },
      {  path: "viewsearchedticket", element: <ViewSearchedTicket /> },
    ],
  },
]);

function App() {
  const [changedStatus, setChangedStatus] = useState("Pending");
  const [IdState, setIdState] = useState(0);
  const [isUserLogin, setIsUserLogin] = useState(
    localStorage.getItem("isLogin")
  );
  // prevent back
  useEffect(() => {
    if (isUserLogin == 0) {
      window.addEventListener("popstate", (e) => {
        window.history.go(1);
      });
    }
  }, [isUserLogin]);

  const changedStatusApprove = () => {
    setChangedStatus("Approved");
    let retString = localStorage.getItem("userList");
    let storageList = JSON.parse(retString);
    storageList.map((user) => {
      user.status = changedStatus;
      localStorage.setItem("userList", JSON.stringify(storageList));
    });
  };

  const chegedStatusCancel = () => {
    setChangedStatus("Rejected");
    let retString = localStorage.getItem("userList");
    let storageList = JSON.parse(retString);
    storageList.map((user) => {
      user.status = changedStatus;
      localStorage.setItem("userList", JSON.stringify(storageList));
    });
  };
  const changeDeleteId = (id) => {
    setIdState(id);
    let retString = localStorage.getItem("userList");
    let storageList = JSON.parse(retString);
    storageList.map((obj) => {
      if (obj.id === id) {
        obj.status = "canceled";
        localStorage.setItem("userList", JSON.stringify(storageList));
      }
    });
  };

  return (
    <StatusContext.Provider
      value={{
        whatStatus: changedStatus,
        onchangeApprove: changedStatusApprove,
        onchangeCancel: chegedStatusCancel,
        deleteIdState: IdState,
        deleteId: changeDeleteId,
      }}
    >
      <RouterProvider router={router} />
    </StatusContext.Provider>
  );
}

export default App;
