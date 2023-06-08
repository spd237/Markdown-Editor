/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, createContext, useContext } from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import Content from './components/Content';

type AuthCtxType = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

type MarkdownCtxType = {
  markdownContent: string;
  setMarkdownContent: React.Dispatch<React.SetStateAction<string>>;
};

export const AuthContext = createContext<AuthCtxType>({
  token: null,
  setToken: () => {},
});

export const MarkdownContext = createContext<MarkdownCtxType>({
  markdownContent: '',
  setMarkdownContent: () => {},
});

const ProtectedRoute = ({ element }: { element: () => JSX.Element }) => {
  const { token } = useContext(AuthContext);
  return token ? element() : <Navigate to="/signin" />;
};

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [markdownContent, setMarkdownContent] = useState('');

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <MarkdownContext.Provider value={{ markdownContent, setMarkdownContent }}>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/markdown"
            element={<ProtectedRoute element={MainPage} />}
          >
            <Route path=":id" element={<Content />} />
          </Route>
          <Route path="*" element={<Navigate to="/signup" replace />}></Route>
        </Routes>
      </MarkdownContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
