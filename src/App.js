
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Buyer from './Pages/Buyer'
import InfoPenawaran from './Pages/InfoPenawaran';


const App = ()  => {

  return (
   <div className="app_container">
    <BrowserRouter>
     <Routes>
       <Route path ="/" element={<Buyer/>}/>
       <Route path ="/info" element={<InfoPenawaran/>}/>
     </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
