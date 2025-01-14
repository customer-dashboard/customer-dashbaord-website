import React from 'react'
import { VerlasData } from '../components/case-study/ShopifyPlus';
import CaseStudyPageStyle from '../styles/CaseStudySinglePage.css';
import CaseStudyStatusPage from '../components/case-study/CaseStudyStatusPage';


export const links = () =>[
    {rel:'stylesheet', href:CaseStudyPageStyle},
  ]

function Verlas() {
  return (
    <>
          <CaseStudyStatusPage dataValue={VerlasData} />
    </>
  )
}

export default Verlas