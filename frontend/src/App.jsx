import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios'
import NotFound from './components/NotFound'
import Userhome from './pages/Userhome'
import Dashboard from './pages/Dashboard'
import About from './components/About'
import Howtobuy from './components/Howtobuy'
import Fund from './components/Fund'
import Numbers from './components/Numbers'
import Buy from './components/Buy'
import Footer from './components/Footer'
import Forgotpass from './pages/Forgotpass'
import ResetPassword from './pages/ResetPassword'



const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [Isloading, setIsloading] = useState(true);
  console.log(user);
  useEffect( () => {
    const fetchUser = async () =>{
      const token = localStorage.getItem("token");
      // console.log("Token", token);
      
      if(token){
        try {
          const res = await axios.get('/api/users/me', {
            headers: {Authorization: `Bearer ${token}`},
          });
          setUser(res.data)
        } catch (error) {
          setError("Failed to fetch user data");
          localStorage.removeItem('token');
        }
      }
      setIsloading(false);
    };
    fetchUser();
  },[]);

  if (Isloading) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <>
    <Router>
        <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Userhome user={user} error={error} />} />
          <Route path='/login' element={user ? <Navigate to='/dashboard' /> : <Login setIsloading={setIsloading} setUser={setUser} />}/>
          <Route path='/register' element={user ? <Navigate to='/dashboard' /> : <Register setUser={setUser} />}/>
          <Route path='/home' element={<Dashboard/>} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/fund' element={<Fund/>}/>
          <Route path='/Numbers' element={<Numbers/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/howtobuy' element={<Howtobuy/>}/>
          <Route path='/forgot-password' element={<Forgotpass setUser={setUser} />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
      </Routes>
      <Footer />

    </Router>
    </>
  )
}

export default App