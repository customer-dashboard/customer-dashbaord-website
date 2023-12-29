import React from 'react'
import SmilyFullBlog from '../../components/blogs/SmilyFullBlog'
import BlogFullPageStyle from '../../styles/BlogFullPage.css';
import StartFreeSectionStyle from '../../styles/StartFree.css';

export const links = () =>[{rel:"stylesheet",href:BlogFullPageStyle},
    {rel:"stylesheet", href:StartFreeSectionStyle}]

function index() {
  return (
   <>
    
       <SmilyFullBlog/>
   
   </>
  )
}

export default index