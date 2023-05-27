import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { signUp } from '../api/docApi';
import { UserData } from '../types';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signUpMutation = useMutation({
    mutationFn: (userData: UserData) => signUp(userData),
  });

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = { username, password };
    signUpMutation.mutate(userData);
  };

  return (
    <div className="bg-almost-black h-screen flex items-center justify-center ">
      <form
        className="bg-dark-gray-2 text-white rounded-[4px] px-6 py-4"
        onSubmit={handleSignUp}
      >
        <h2 className=" font-bold text-xl text-center mb-8">
          Create an account
        </h2>

        <div className="flex flex-col gap-4 ">
          <div className="flex justify-between">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className=" outline-none bg-light-gray-1 px-2 caret-orange rounded-sm"
            />
          </div>
          <div className="flex justify-between gap-8">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className=" outline-none bg-light-gray-1 px-2  caret-orange rounded-sm"
            />
          </div>
        </div>
        <button className="bg-orange mt-8 py-2 rounded-sm font-medium hover:bg-orange-hover w-full">
          Sign Up
        </button>
        <p className="text-center mt-6">
          Already have an account{' '}
          <button
            // onClick={() => setLogIn((prevLogin) => !prevLogin)}
            className="underline text-orange  "
          >
            Log In
          </button>{' '}
        </p>
      </form>
    </div>
  );
}
