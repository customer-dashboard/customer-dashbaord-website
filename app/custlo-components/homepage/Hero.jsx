import React from 'react'
import Header from '../Header'
import Banner from '../homepage/Banner';

function Hero() {
  return (
    <>

        <section className='hero-header hero-header-banner pt-5'>
           <div className="pt-2">
             <Header/>
            <Banner/>
           </div>
        </section>
    
    </>
  )
}

export default Hero