import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import StudentHome from './components/student/StudentHome';
import './resources/sass/app.scss';
import { getAuthToken, getUser } from './services/auth.service';

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null)

  async function loadUser() {
    try {
      if (getAuthToken() == null) return setUser(null);
      const res = await getUser();
      setUser(res.data);
    } catch (error) {
      setUser(null);
    }

  }

  useEffect(() => {
    loadUser();
    window.addEventListener('storage', loadUser);
  }, [])

  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentHome />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
