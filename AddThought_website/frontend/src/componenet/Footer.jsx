import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../style/footer.css"

function Footer() {
  return (
    <>
      <div className='bg-body-tertiary mt-4 lh-1'>
        <div className='text-center pt-4'>
          <p className='fw-normal fs-5'>JUSTHOUGHT</p>
          <p className='fw-normal fs-5'>Made by roopeshkumar11</p>
          <p>Copyright © 2024 - All right reserved</p>
        </div>
        <div className="icon-conten text-center lh-1 fs-5 px-3  text-decoration: none">
          <a href="https://github.com/roopeshkumar11" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/roopeshkumar11" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare />
          </a>
          <a href="https://www.linkedin.com/in/roopeshkumar11" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;
