import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from"../assets/1.jpg";
import img2 from"../assets/2.jpg";
import img3 from"../assets/3.jpg";
import img4 from"../assets/4.jpg";

const Services = () => {
  return (
    <div>
        <Carousel
            infiniteLoop autoPlay
            showStatus={false}
            showArrows={false}
            interval={1000}
            showThumbs={false}
            
        >
            <div>
                <img src={img1} alt="img" />
                <p className='legend'>1st Image</p>
            </div>
            <div>
                <img src={img2} alt="img" />
                <p className='legend'>2st Image</p>
            </div>
            <div>
                <img src={img3} alt="img" />
                <p className='legend'>3st Image</p>
            </div>
            <div>
                <img src={img4} alt="img" />
                <p className='legend'>4st Image</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services