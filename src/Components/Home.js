import React, { useState } from "react";
import web from "../images/travel.png";
import AppHeader from "./AppHeader";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const [userType, setUserType] = useState(localStorage.getItem("type"));

  const navigate = useNavigate();
  function navigation() {
    if (userType === "") {
      navigate("/adduser");
    }
    if (userType === "admin") {
      navigate("/admin");
    }
    if (userType === "normal") {
      navigate("/searchprn");
    }
  }

  return (
    <div>
      <AppHeader />
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid dark-b ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h1>
                    Enjoy bookings with
                    <strong className="brand-name"> ResBook</strong>
                  </h1>
                  <h2 className="my-3">
                    For faster, simpler and efficient Hotel bookings
                  </h2>
                  <div className="mt-3">
                    {userType !== "admin" && (
                      <Button variant="primary" onClick={navigation} size="lg">
                        Book Now
                      </Button>
                    )}
                  </div>
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
