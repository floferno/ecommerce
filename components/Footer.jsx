import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = ({footerBanner}) => {
  return (
    <div className="footer-container">
      <p>2022 JSM Headphones All rights reserved</p>
      <p className="icons">
        <AiOutlineTwitter/>
        <AiFillInstagram/>
      </p>
    </div>
  )
}

export default Footer