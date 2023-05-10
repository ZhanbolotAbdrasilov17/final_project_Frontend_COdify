import React from 'react';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Listings from './containers/Listings';
import ListingDetail from './containers/ListingDetail';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import NotFound from './components/NotFound';
import Layout from './hocs/Layout';
import PrivateRoute from './components/PrivateRoute';


import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Navigate to="home"/>}/>
                    <Route path='home' element={<Home/>} />
                    <Route path='about' element={<About/>} />
                    <Route path='contact' element={<Contact/>} />
                    <Route path='listings' element={<Listings/>} />
                    <Route path='listings/:id' element={<ListingDetail/>} />
                    <Route path='login' element={<Login/>} />
                    <Route path='signup' element={<SignUp/>} />
                    <Route path='*'  element={<NotFound/>} />
            
            </Route>
          </Routes>
          
  )
}
            



export default App;