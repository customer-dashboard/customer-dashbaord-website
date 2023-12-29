import React from 'react'
import KlaviyoFullBlog from '../../components/blogs/KlaviyoFullBlog';
import BlogFullPageStyle from '../../styles/BlogFullPage.css';
import StartFreeSectionStyle from '../../styles/StartFree.css';

export const links = () => [{ rel: "stylesheet", href: BlogFullPageStyle },
  {rel:"stylesheet", href:StartFreeSectionStyle}];

function index() {
  return (
    <>

        <KlaviyoFullBlog/>
    
    </>
  )
}

export default index