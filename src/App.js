
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buyer from './Component/Buyer/Buyer'


const App = ()  => {

  return (
   <div className="app_container">
    <BrowserRouter>
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
