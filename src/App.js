
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Buyer from './Pages/Buyer'


const App = ()  => {

  return (
   <div className="app_container">
    <BrowserRouter>
    <Navbar />
    <Buyer/>
     {/* <Routes>
       <Route path ="/" element={<Home/>}/>
       <Route path ="/movie/:id" element={<Movie/>}/>
     </Routes> */}
     </BrowserRouter>
   </div>
  );
}

export default App;
