import React,{useEffect} from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img1 from '../../Assets/1_newyork.jpg'
import img2 from '../../Assets/2_amstredam.jpg'
import img3 from '../../Assets/3_bali.jpg'
import img4 from '../../Assets/4_barcelona.jpg'
import img5 from '../../Assets/5_capetown.jpg'
import img6 from '../../Assets/6_dubai.jpg'
import img7 from '../../Assets/7_paris.jpg'
import img8 from '../../Assets/8_sydney.jpg'
import img9 from '../../Assets/9_tokyo.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'New York',
    location: 'USA',
    grade: 'CULTURAL',
    fees: '$900',
    description: 'New York City, the most populous city in the United States, is famous for its iconic landmarks such as the Statue of Liberty, Times Square, and Central Park.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Amsterdam',
    location: 'Netherlands',
    grade: 'CULTURAL',
    fees: '$800',
    description: 'Amsterdam is known for its artistic heritage, elaborate canal system, narrow houses with gabled facades, and vibrant nightlife.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Bali',
    location: 'Indonesia',
    grade: 'RELAX',
    fees: '$1000',
    description: 'Bali is renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Barcelona',
    location: 'Spain',
    grade: 'CULTURAL',
    fees: '$850',
    description: 'Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is famous for its art and architecture.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Cape Town',
    location: 'South Africa',
    grade: 'ADVENTURE',
    fees: '$950',
    description: 'Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Dubai',
    location: 'United Arab Emirates',
    grade: 'ADVENTURE',
    fees: '$1200',
    description: 'Dubai is known for luxury shopping, ultramodern architecture, and a lively nightlife scene.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CULTURAL',
    fees: '$950',
    description: 'Paris, France’s capital, is a major European city and a global center for art, fashion, gastronomy, and culture.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Sydney',
    location: 'Australia',
    grade: 'ADVENTURE',
    fees: '$1100',
    description: 'Sydney, capital of New South Wales and one of Australia’s largest cities, is best known for its Sydney Opera House.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Tokyo',
    location: 'Japan',
    grade: 'CULTURAL',
    fees: '$1000',
    description: 'Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.'
  }
];

const Main = () => {
  useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <section className='main container section'>

        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                Most visited destinations
            </h3>
        </div>

        <div className="secContent grid">
        {
            Data.map(({id, imgSrc,destTitle,location,grade,fees,description})=>{
                return(
                    <div key={id} data-aos="fade-up" className='singleDestination'>
                        <div className='imageDiv'>
                            <img src={imgSrc} alt={destTitle} />
                        </div>
                        <div className="cardInfo">
                            <h4 className='destTitle'>{destTitle}</h4>
                            <span className='continent.flex'>
                                <HiOutlineLocationMarker />
                                <span className='name'>{location}</span>
                            </span>
                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                </div>
                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                            </div>
                            
                            <div className='desc'>
                                <p>{description}</p>
                            </div>

                            <button className='btn flex'>
                                DETAILS <HiOutlineClipboardCheck className='icon' />
                            </button>
                        </div>
                    </div>

                )
            })
        }
        </div>


    </section>
  )
}

export default Main