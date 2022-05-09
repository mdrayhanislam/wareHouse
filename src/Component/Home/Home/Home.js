import React from 'react';
import WareHouseWorkerJob from '../../WareHouseWorkerJob/WareHouseWorkerJob';
import WarehousingServices from '../../WarehousingServices/WarehousingServices';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <WareHouseWorkerJob></WareHouseWorkerJob>
           <WarehousingServices></WarehousingServices>
        </div>
    );
};

export default Home;