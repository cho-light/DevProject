import React from 'react'
import { BlogMainContainer, BackgroundImg, BlogMainText, BlogList } from './BlogMainStyle'
import blogbackgroundImg from '../../assets/images/blogbackgroundImg.png'
import BlogMainSlide1 from './blogSlide/BlogMainSlide1'
import BlogMainSlide2 from './blogSlide/BlogMainSlide2'


export default function BlogMain() {


  return (
    <BlogMainContainer>
        <BackgroundImg src={blogbackgroundImg} alt="BackroundImage"/>
        <BlogMainSlide1/>
        <BlogMainSlide2/>
    </BlogMainContainer>
  )
}
