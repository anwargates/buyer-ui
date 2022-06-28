
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buyer from './Pages/Buyer'
import Seller from './Pages/Seller'
import InfoPenawaran from './Pages/InfoPenawaran';

const App = ()  => {

  return (
   <div className="app_container">
    <BrowserRouter>
     <Routes>
       <Route path ="/buyer/:id" element={<Buyer/>}/>
       <Route path ="/info" element={<InfoPenawaran/>}/>
       <Route path ="/seller" element={<Seller/>}/>
     </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
