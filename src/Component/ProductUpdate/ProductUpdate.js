import React from 'react';
import { useParams } from 'react-router-dom';

const ProductUpdate = () => {
    const {serviceId} = useParams();
    return (
        <div className='d-flex align-items-center justify-content-center mt-5'>

         <p className='me-5 mt-2'>Product Id: {serviceId} </p>
         

           <button type="button" className="btn btn-primary "> Product Update </button>
            
        </div>
    );
};

export default ProductUpdate;