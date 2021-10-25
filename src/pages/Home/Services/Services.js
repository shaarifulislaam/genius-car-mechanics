import React, { useEffect, useState } from "react";
import Serivce from "../Service/Serivce";
import "./services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services">
      <h2 className="text-primary mt-5">Our services</h2>
      <div className="service-container">
        {services.map((service) => (
          <Serivce key={service.id} service={service}>
            {" "}
          </Serivce>
        ))}
      </div>
    </div>
  );
};

export default Services;
