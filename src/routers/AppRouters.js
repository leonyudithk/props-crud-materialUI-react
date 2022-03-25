import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';

const AppRouters = () => {
    return (
        <div>
           <BrowserRouter>
               <Routes>
                   <Route path ="/" element={<Home/>}/>
               </Routes>
           </BrowserRouter>
        </div>
    );
};

export default AppRouters;