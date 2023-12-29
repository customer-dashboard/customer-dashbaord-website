import React from 'react'
import BlogFullPageStyle from '../../styles/BlogFullPage.css';
import StartFreeSectionStyle from '../../styles/StartFree.css';
import CustomerDashboardFullBlog from '../../components/blogs/CustomerDashboardFullBlog';

export const links = () =>[{rel:"stylesheet",href:BlogFullPageStyle},
    {rel:"stylesheet", href:StartFreeSectionStyle}]

function index() {
  return (
   <>
    
       <CustomerDashboardFullBlog/>
   
   </>
  )
}

export default index