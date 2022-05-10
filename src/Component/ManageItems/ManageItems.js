
import React from 'react';
import { Button } from 'react-bootstrap';
import useServices from '../../Hooks/UseProduct'
const ManageItems = () => {
    const [services, setServices] = useServices();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://lit-spire-37049.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }
    return (
        <div>
            <h1 className='d-flex justify-content-center text-primary'> Manage Items </h1>
            {
                services.map(service => <div key={service._id}>
                 <div className='d-flex justify-content-center align-items-center mt-3'>
                 <img width="100px" src={service.image} alt="" />
                    <h4 className='ps-5 pe-5'>{service.name} </h4>
                    <Button onClick={() => handleDelete(service._id)} variant="danger">Delete</Button>
                 </div>
                 
                </div>)
            }
        </div>
    );
};

export default ManageItems;