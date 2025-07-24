import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.page'
import LayOut from './pages/LayOut.page'
import DashBoard from './pages/DashBoard.page'
import WriteArticle from './pages/WriteArticle.page'
import BlogTitle from './pages/BlogTitle.page'
import GenerateImages from './pages/GenerateImages.page'
import RemoveBackground from './pages/RemoveBackground.page'
import RemoveObject from './pages/RemoveObject.page'
import ReviewResume from './pages/ReviewResume.page'
import Community from './pages/Community.page'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'

const App = () => {

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/ai' element={<LayOut />}>
          <Route index element={<DashBoard />} />
          <Route path='write-article' element={<WriteArticle />}/>
          <Route path='blog-titles' element={<BlogTitle />}/>
          <Route path='generate-images' element={<GenerateImages />}/>
          <Route path='remove-background' element={<RemoveBackground />}/>
          <Route path='remove-object' element={<RemoveObject />}/>
          <Route path='review-resume' element={<ReviewResume />}/>
          <Route path='community' element={<Community />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
