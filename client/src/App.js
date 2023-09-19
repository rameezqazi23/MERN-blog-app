import './App.css';
import { Home, SignIn, SignUp } from './Pages';
import { Navbar } from './Components';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
