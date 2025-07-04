import React, { useState } from "react";
import { useAuth } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');

    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F3F3F3]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-2xl font-semibold text-center">Login your account</h2>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login your account</button>
          </fieldset>
        </form>
        <p className="text-center font-semibold p-5">
          Don't have an account? <a href="/auth/register" className="link link-hover text-blue-600">Register</a>
        </p>
      </div>
    </div>
  );
}
