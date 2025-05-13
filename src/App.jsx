import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './layout/layout';
import Stories from './Pages/Stories';
import AllCategory from './Pages/AllCategories';
import Category from './Pages/Category';
import Authors from './Pages/Authors';
import WriteStory from './Pages/WriteStory';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/stories' element={<Stories/>} />
            <Route path='/categories' element={<AllCategory/>} />
            <Route path='/category/:categoryName' element={<Category/>} />
            <Route path='/authors' element={<Authors/>} />
            <Route path='/write' element={<WriteStory/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/privacy' element={<PrivacyPolicy/>} />
            <Route path='/terms' element={<TermsAndConditions/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
