import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './page/main/Main';
import BlogPage from './page/blog/BlogPage';
import BolgWritingPage from './page/blog/BlogWritingPage'

export default function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='' element={<Main/>}/>
          <Route path='blog' element={<BlogPage/>}/>
          <Route path='write' element={<BolgWritingPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}
