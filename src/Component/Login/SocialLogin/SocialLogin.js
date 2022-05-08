import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from '../../../Image/google.png'


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading){
     return
    }

    if (error ) {
       
        errorElement = <p className='text-danger d-flex align-items-center justify-content-center'> Please sign in with google</p>
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'> </div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                
            </div>
            {errorElement}
            <div className='container'>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={googleLogo} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;