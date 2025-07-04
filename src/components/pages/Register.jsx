import React, { useState } from 'react';
import { useAuth } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const email = form.get('email');
    const photoURL = form.get('photoURL');
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUser(email, password);
      await updateUserProfile(name, photoURL);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F3F3F3]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-2xl font-semibold text-center">Register your account</h2>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input name="name" type="text" className="input" placeholder="Name" required />
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />
            <label className="label">Photo URL</label>
            <input name="photoURL" type="url" className="input" placeholder="Photo URL" />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required />
            <label className="label">Confirm Password</label>
            <input name="confirmPassword" type="password" className="input" placeholder="Confirm Password" required />
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p className="text-center font-semibold p-5">
          Already have an account? <a href="/auth/login" className="link link-hover text-blue-600">Login</a>
        </p>
      </div>
    </div>
  )
}
