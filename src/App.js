import { createContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import WindowLoader from './components/generic/WindowLoader';
import Home from './components/home/Home';
import PrivateRoute from './components/routes/PrivateRoute';
import StudentHome from './components/student/StudentHome';
import StudentPrizeStore from './components/student/StudentPrizeStore';
import './resources/sass/app.scss';
import { getAuthToken, getUser, logout } from './services/auth.service';

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  async function loadUser() {
    setLoading(true);
    try {
      if (getAuthToken() == null) return setUser(null);
      const res = await getUser();
      setUser(res.data);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
    window.addEventListener('storage', loadUser);
    window.addEventListener('expiredToken', logout);
  }, [])

  if (loading) return <WindowLoader />

  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="student">
          <Route path="" element={<PrivateRoute><StudentHome /></PrivateRoute>} />
          <Route path='prizes' element={<PrivateRoute><StudentPrizeStore /></PrivateRoute>} />
        </ Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
