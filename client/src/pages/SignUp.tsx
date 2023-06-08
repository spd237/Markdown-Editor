import { useContext, useState } from 'react';
import { signUp } from '../api/docApi';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../App';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp({ username, password })
      .then(({ data }) => {
        setToken(data.token);
        navigate('/markdown');
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
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
        <div className="capitalize font-bold text-red-500 mt-6 text-center py-1 text-sm rounded-sm">
          {error}
        </div>
        <button className="bg-orange mt-8 py-2 rounded-sm font-medium hover:bg-orange-hover w-full">
          Sign Up
        </button>
        <p className="text-center mt-6">
          Already have an account?{' '}
          <button className="underline text-orange  ">
            <Link to="/signin" replace>
              Sign In
            </Link>
          </button>{' '}
        </p>
      </form>
    </div>
  );
}
