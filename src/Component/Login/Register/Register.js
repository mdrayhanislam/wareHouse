import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate =useNavigate();

    const navigateLogin = () =>{
         navigate('/login')
    }
    if(loading){
        return <Loading></Loading>
       }
    if(user){
        console.log('user', user);
       navigate('/home');
    }

    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;
        
        if(agree){
        await createUserWithEmailAndPassword(email, password);
        }

        await updateProfile ({displayName: name})
        alert('Updated profole');
        navigate('/home');
        
    }
    return (
        <div className='register-form'>
         <h1 style={{textAlign:'center'}}>  Please Register </h1>
         <form onSubmit={handleRegister}>
             <input type="text" name='name' id='' placeholder='Your Name' />
             <input type="email" name='email' id='' placeholder='Your Email' required/>
             <input type="password" name='password' id='' placeholder='Your Password' required/>
             <div style={{textAlign:'center'}}>
             <input onClick={() =>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
             <lebel className={agree ? 'ps-2 text-primary' : 'ps-1 text-danger'} htmlFor="terms" >Accept Terms and Conditions</lebel>
             </div>
             
            
             <input 
             disabled={!agree}
             className='w-50 mx-auto-btn submit-custom mt-3'
              type="submit" value="Register" />
         </form>
         <p style={{textAlign:'center'}}>All ready have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> Please Login </Link></p>
         <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;