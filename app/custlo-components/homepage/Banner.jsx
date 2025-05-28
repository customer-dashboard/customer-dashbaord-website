import React from 'react'
import { Image } from 'react-bootstrap'

function Banner() {
  return (
    <>
    
        <div className="header-hero-banner mt-5">
            <div className="container">
              <div className="header-hero-content pt-2">
                <div className="mb-3 built-for-shopify-button text-center">
                <span className="built-button-wraper">
                    <span className="built-shopify-logo">
                    <svg class="tw-h-[0.75em] diamond" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13 0-1 5-4 9 8-9.5L13 0ZM3 0l1 5 4 9-8-9.5L3 0Z" fill="#0D79A7"></path><path d="m3 0 1 5 4 9 4-9 1-5H3Z" fill="#49A3C9"></path><path d="M8 14 4 5l-4-.5L8 14ZM8 14l4-9 4-.5L8 14Z" fill="#07425B"></path><path d="M8 5.5 4 5l4 9 4-9-4 .5Z" fill="#0D79A7"></path><path d="m4 5 4-5 4 5-4.001.5L4 5Z" fill="#95D5F0"></path><path d="M4 5 3 0h5L4 5ZM12 5l1-5H8l4 5Z" fill="#49A3C9"></path><path d="M4 5 3 0 0 4.5 4 5ZM12 5l1-5 3 4.5-4 .5Z" fill="#0D79A7"></path></svg>
                    </span>
                    <span className="built-shopify-text">Built for Shopify</span>
                </span>
                </div>
                <div className="mt-4">
                    <h1 className='font-alverata-italic h1 text-center'>Customer account that <span className='gradient-text'>builds trust</span></h1>
                </div>
                <div className="mt-4">
                    <p className='hero-para text-center'>
                        Available features like Custom Profile Fields, Order Tracking, Store credits, Re-order, Quick Contact, Edit Profile, Change Password, Upsell Products Widget, Trust Badges, Customer Testimonials, Image & Text Banners etc .
                    </p>
                </div>
                <div className="mt-5 d-flex justify-content-center header-hero-btn">
                    <a href="https://apps.shopify.com/customer-dashboard-pro" target="_blank" rel="noopener noreferrer">Get started free</a>
                </div>
            </div>
             <div className="header-hero-img">
                 <Image 
                     width="100%"
                     src='https://mandasa1.b-cdn.net/CustLo/Home%20Page%20Images/New%20customer%20account%20app%20banner.png'
                     alt='shopify customer account features'
                     title='customer account features'
                     >
                    </Image>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Banner