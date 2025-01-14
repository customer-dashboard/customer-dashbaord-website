import React from 'react'
import IndustriesIndex from '../components/case-study/industries/IndustriesIndex';
import IndustriesStyle from '../styles/IndustriesGrid.css';

export const links = () =>[
  {rel:'stylesheet', href:IndustriesStyle},
]

function IndustriesSolutions() {
  return (
    <IndustriesIndex/>
  )
}

export default IndustriesSolutions