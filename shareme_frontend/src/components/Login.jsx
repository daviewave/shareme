import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { client } from '../client';

import { useNavigate } from 'react-router-dom';
import shareVid from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          localStorage.setItem('user', JSON.stringify(res.data));

          const newUserDocument = {
            _id: res.data.id,
            _type: 'user',
            username: res.data.name,
            image: res.data.picture,
          };

          client.createIfNotExists(newUserDocument).then(() => {
            navigate('/', { replace: true });
          });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVid}
          type="video/mp4"
          loop
          controls={false}
          muted={true}
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>

          <div className="shadow-2xl">
            {profile ? (
              <div>
                <img src={profile.picture} alt="user-profile-pic" />
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email Address: {profile.email}</p>
                <br />
                <br />
                <button onClick={logOut}>Log out</button>
              </div>
            ) : (
              <GoogleLogin onSuccess={() => login()} onError={() => login()}>
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
              </GoogleLogin>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
