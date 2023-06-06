import { useState, createContext } from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import Content from './components/Content';

type CtxType = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};
export const AuthContext = createContext<CtxType>({
  token: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setToken: () => {},
});

function App() {
  const [token, setToken] = useState<string | null>(null);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/markdown" element={<MainPage />}>
          <Route path=":id" element={<Content />} />
        </Route>
        <Route path="*" element={<Navigate to="/signup" replace />}></Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
