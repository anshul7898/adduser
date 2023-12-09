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
import React, { useState } from "react";
import Admin from "./Components/Admin";
import ViewSearchedTicket from "./Components/ViewSearchedTicket";
import BookingList from "./Components/BookingList";
import Soup from "./Components/Soup";
import Manchurians from "./Components/Manchurians";
import RiceVariety from "./Components/RiceVariety";
import Noodles from "./Components/Noodles";
import Sandwiches from "./Components/Sandwiches";
import Pizza from "./Components/Pizza";
import SabjiMandi from "./Components/SabjiMandi";
import PaneerkaKhajana from "./Components/SabjiMandi";
import Dal from "./Components/Dal";
import TandoorStarter from "./Components/TandoorStarter";
import BasmatiKaKhazana from "./Components/BasmatiKaKhazana";
import RotiKiTokari from "./Components/RotiKiTokari";
import SaladPapadRaita from "./Components/SaladsPapadRaita";
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
      {  path: "ricevariety", element: <RiceVariety /> },
      {  path: "noodles", element: <Noodles /> },
      {  path: "sandwiches", element: <Sandwiches /> },
      {  path: "pizza", element: <Pizza /> },
      {  path: "sabjimandi", element: <SabjiMandi /> },
      {  path: "paneerkakhajana", element: <PaneerkaKhajana /> },
      {  path: "dal", element: <Dal /> },
      {  path: "tandoorstarter", element: <TandoorStarter /> },
      {  path: "basmatikakhazana", element: <BasmatiKaKhazana /> },
      {  path: "rotikitokari", element: <RotiKiTokari /> },
      {  path: "saladpapadraita", element: <SaladPapadRaita /> },
      {  path: "admin", element: <Admin /> },
      {  path: "viewsearchedticket", element: <ViewSearchedTicket /> },
    ],
  },
]);

function App() {
  const [changedStatus, setChangedStatus] = useState("Pending");
  const [IdState, setIdState] = useState(0);

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
