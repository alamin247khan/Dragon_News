import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useAuth } from '../provider/AuthProvider';

export default function SocialLogin() {
  const { user, signInWithGoogle } = useAuth();

  if (user) {
    return null;
  }

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        console.log('Google login successful:', result.user);
      })
      .catch(error => {
        console.error('Google login error:', error);
      });
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="flex flex-col gap-2">
        <button onClick={handleGoogleLogin} className="btn flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded">
          <FaGoogle className="text-xl" />
          <span className="ml-2">Google</span>
        </button>
        <button className="btn flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded">
          <FaGithub className="text-xl" />
          <span className="ml-2">Github</span>
        </button>
      </div>
    </div>
  );
}

