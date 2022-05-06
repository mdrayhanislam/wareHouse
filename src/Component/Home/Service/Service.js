import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id, image, name, price, description, quantity, supplierName} =service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-container'>
            <img src={image} alt="" />
            <h1> {name}</h1>
           <h5> Price: {price} TK</h5>
           <p>Stock: {quantity} KG</p>
           <p>Supplier Name: {supplierName}</p>
           <p>{description}</p>
           <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'> Book: {name}</button>
        </div>
    );
};

export default Service;