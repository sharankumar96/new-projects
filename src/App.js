import logo from './logo.svg';
import './App.css';
import contactus from './pages/contactus';
import aboutus from './pages/aboutus';
import home from './pages/home';
import Navbar from './pages/navbar';
import Loginpage from './pages/loginpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<home />} />
          <Route path='/aboutus' element={<aboutus />} />
          <Route path='/contactus' element={<contactus />} />
          <Route path='/loginpage' element={<loginpage />} />


        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
