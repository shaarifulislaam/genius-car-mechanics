import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'


const Serivce = ({service}) => {
    // const {service} = props;
    const {id,  name , price , img , description} = service
    return (
        <div className="service">
          
          
            <img src={img} alt="" />
            <h2 className="text-secondary">{name}</h2>
            <h5>Price : {price}</h5>
            <p className="p-3">{description}</p>
           <Link to={`/booking/${id}`}>
           <Button variant="primary my-3">Book {name.toLowerCase()}</Button>
           </Link>
        </div>
    );
};

export default Serivce;