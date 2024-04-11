import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/footer.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <section className='footer'>
    <div className='videoDiv'>
      <video src={video2} loop autoPlay type = "video/mp4"></video>
    </div>

    <div className='secContent container'>
      <div className="contactDiv flex">
        <div data-aos="fade-up" className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel with us</h2>
        </div>

        <div data-aos="fade-up" className="inputDiv flex">
          <input type="text" placeholder='Enter Email Address'/>
          <button data-aos="fade-up" className='btn flex' type='submit'>
          SEND<FiSend className='icon' />
          </button>
        </div>

      </div>

      <div data-aos="fade-up" className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="#" className='logo flex'>
            <MdOutlineTravelExplore className='icon' />Travel.
            </a>
          </div>

          <div data-aos="fade-up" className="footerParagraph">
          Explore the world with us at Travel. From cultural immersion to thrilling adventures, we're here to guide you. Start planning your next unforgettable journey today!
          </div>

          <div data-aos="fade-up" className="footerSocials flex">
          <FaInstagram className='icon' />
          <AiOutlineTwitter className='icon' />
          <MdOutlineWhatsapp className='icon' />
          <FaTripadvisor className='icon' />
          </div>
        </div>
        <div  className="footerLinks grid">
          <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>

            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              Services
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              Insurance
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              Agency
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              Tourism
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              Payment
            </li>
          </div>
          <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className="groupTitle">
              PARTNERS
            </span>

            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              Bookings
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              Rentcars
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              HostelWorld
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              Trivago
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              Tripadvisor
            </li>
          </div>
          <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
            <span className="groupTitle">
              Last Minute
            </span>

            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              London
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              California
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              Indonesia
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              Europe
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon' />
              Oceania
            </li>
          </div>
          
        </div>

        <div className='footerDiv flex'>
          <small>
            BEST TRAVEL WEBSITE THEME
          </small>
          <small>COPYRIGHTS RESERVED - TEJAS</small>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Footer 