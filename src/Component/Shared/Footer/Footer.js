import React from 'react';
import facebook from '../../../Image/facebook.jpg'
import twitter from '../../../Image/twitter.jpg'
import whatsapp from '../../../Image/whatsapp.png'
import youtube from '../../../Image/youtube.png'
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='mt-5 footer'>
     <p className='d-flex justify-content-center mt-5'><small>Copy Right @ {year} </small></p>
     <div className='d-flex align-item-center justify-content-center'>
         <img width="30px" src={facebook} alt="" />
         <img width="30px" src={twitter} alt="" />
         <img width="30px" src={whatsapp} alt="" />
         <img width="30px" src={youtube} alt="" />
     </div>
        </footer>
    );
};

export default Footer;