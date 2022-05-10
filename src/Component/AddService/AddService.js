import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
const AddService = () => {
    const { register, handleSubmit } = useForm();
     const nagigate = useNavigate();
    const onSubmit = data => {
    console.log(data);
   const url =`https://lit-spire-37049.herokuapp.com/service`;
   fetch(url, {
       method: 'POST',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(data)
   })
   .then(res=> res.json())
   .then(result =>{
       console.log(result)
       nagigate('/manageitems')
   })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1> Please add Product</h1>

            <form className='mt-5 d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mt-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mt-2' placeholder='Supplier Name' {...register("supplierName", { required: true, maxLength: 20 })} />
                <textarea className='mt-2' placeholder='Description' {...register("description")} />
                <input className='mt-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mt-2' placeholder='Photo URL' type="text" {...register("image")} />
                <input className='mt-2' placeholder='Stock' type="text" {...register("quantity")} />
                <input className='mt-2 bg-primary text-white' type="submit" value="Add Product" />
            </form>
            <p className='mt-3 d-flex justify-content-center'> <Link to="/manageitems" className='text-danger pe-auto text-decoration-none'> Delete Item </Link></p>
        </div>
    );
};

export default AddService;