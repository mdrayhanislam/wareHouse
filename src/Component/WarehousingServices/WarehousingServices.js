import React from 'react';
import warehouse from '../../Image/store.jpg'

const WarehousingServices = () => {
    return (
        <div className='d-flex justify-content-center align-items-center container mt-5'>
            
            <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body mt-5">
        <h5 className="card-title">Warehousing services</h5>
        <p className="card-text"> Our global footprint and extensive network means we have facilities ready to handle your supply chain, whether at origin or destination. By combining shipping with warehousing and distribution, you benefit from a seamless end-to-end solution with fewer logistic service providers. Complexity is reduced, and you gain speed, control and visibility.</p>
        
      </div>
    </div>
  </div>

  <div className="col-sm-6">
    <div className="">
      <img width="70%" src={warehouse} alt="" />
    </div>
  </div>
</div>

        </div>
    );
};

export default WarehousingServices;