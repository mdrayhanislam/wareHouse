import React, { useEffect, useState } from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductUpdate = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://lit-spire-37049.herokuapp.com/service/${serviceId}`
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
  }, [])

  const handleUpdateUser = event =>{
    event.preventDefault();
    const quantity = event.target.quantity.value;
   console.log(quantity)

    const updatedUser = {quantity};

    

    // send data to the server
    const url = `https://lit-spire-37049.herokuapp.com/service/${serviceId}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success', data);
        alert('users added successfully!!!');
        event.target.reset();
    })
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

          <form onSubmit={handleUpdateUser}>
            <input type="number" name="number" placeholder='Stock Update' required />
            <br />

            <input className='mt-2' type="submit" value="Stock Update" />
          </form>

        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductUpdate;