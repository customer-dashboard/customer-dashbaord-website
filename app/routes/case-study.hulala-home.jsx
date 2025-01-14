import React from 'react'
import { HulalaHomeCaseStudyData } from '../components/case-study/ShopifyPlus';
import CaseStudyPageStyle from '../styles/CaseStudySinglePage.css';
import CaseStudyStatusPage from '../components/case-study/CaseStudyStatusPage';


export const links = () =>[
    {rel:'stylesheet', href:CaseStudyPageStyle},
  ]

function HulalaHome() {
  return (
    <>
          <CaseStudyStatusPage dataValue={HulalaHomeCaseStudyData} />
    </>
  )
}

export default HulalaHome