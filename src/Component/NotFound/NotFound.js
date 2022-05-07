import React from 'react';
import notfound from '../../Image/notfound.jpg'
const NotFound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <img width="75%" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;