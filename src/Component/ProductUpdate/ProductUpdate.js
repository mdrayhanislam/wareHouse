import React, { useEffect, useState } from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductUpdate = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect( () =>{
     const  url =`http://localhost:5000/service/${serviceId}`
     fetch(url)
     .then(res=> res.json())
     .then(data => setService(data))
    }, [])

const handleDelevary = () =>{
    const d = service.quantity
    const delevary = 1;
    const r = d-delevary
    console.log(r)
}
    return (
        <div className='d-flex align-items-center justify-content-center mt-5'>
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service.image} />
  <Card.Body>
    <Card.Title>{service.name}</Card.Title>
    <p>Price: {service.price}</p>
    <p>Stock: {service.quantity}</p>
    <p>Supplier Name: {service.supplierName}</p>
    <Card.Text>
       {service.description}
    </Card.Text>
    <Button onClick={handleDelevary} variant="primary">Delevary</Button>
    
    <InputGroup className="mb-3 mt-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <FormControl
      placeholder="Add Stock"
      aria-label="Add Stock"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  </Card.Body>
</Card>
        </div>
    );
};

export default ProductUpdate;