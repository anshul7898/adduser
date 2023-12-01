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

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { exact, path: "/adduser", element: {AddUser } },
      { exact, path: "/newbooking", Component: {NewBooking} },
      { exact, path: "/searchprn", element: <SearchPrn /> },
      { exact, path: "/contactus", element: {ContactUs} },
      { exact, path: "newticket", element: <NewTicket /> },
      { exact, path: "viewticket", element: <ViewTicket /> },
      { exact, path: "cancelticket", element: <CancelTicket /> },
      { exact, path: "admin", element: <Admin /> },
      { exact, path: "viewsearchedticket", element: <ViewSearchedTicket /> },
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
    <Routes>
    <Route exact path="/" component={Home} />
    <Route exact path="/adduser" component={AddUser} />
    <Route exact path="/contactus" component={ContactUs} />
    <Redirect to="/" />
  </Routes>
  );
}

export default App;
