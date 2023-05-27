import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '../api/docApi';
import { UserData } from '../types';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signInMutation = useMutation({
    mutationFn: (userData: UserData) => signIn(userData),
  });

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = { username, password };
    signInMutation.mutate(userData);
  };

  return (
    <div className="bg-almost-black h-screen flex items-center justify-center ">
      <form
        className="bg-dark-gray-2 text-white rounded-[4px] px-6 py-4"
        onSubmit={handleSignIn}
      >
        <h2 className=" font-bold text-xl text-center mb-8">Sign In</h2>

        <div className="flex flex-col gap-4 ">
          <div className="flex justify-between gap-8">
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
          <div className={'flex justify-between '}>
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
          Log In
        </button>
        <p className="text-center mt-6">
          Need an account?{' '}
          <button
            // onClick={() => setLogIn((prevLogin) => !prevLogin)}
            className="underline text-orange  "
          >
            Sign Up
          </button>{' '}
        </p>
      </form>
    </div>
  );
}
