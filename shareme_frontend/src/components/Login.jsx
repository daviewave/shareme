import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import FcGoogle from 'react-icons/fc';
import shareVid from '../assets/share.mp4';
import logo from '../assets/logo.png';

const Login = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className='relative w-full h-full'>
        <video
          src={shareVid}
          type='video/mp4'
          loop
          controls={false}
          muted={true}          
          autoPlay
          className='w-full h-full object-cover'
        />        
      </div>
    </div>
  )
};

export default Login;
