import React from 'react';
import "./About.css";
import images from '../../constants/images';

const About = () => {
  return (
    <section className='about section-p bg-dark' id = "about">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className = "content-left">
                    <img src = {images.about_main_img} alt = "" />
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>About Us</h3>
                    </div>
                    <p className = "text">At FLIQ, we help individuals and businesses navigate the world of investments with ease and confidence. Our mission is to provide smart, personalized investment strategies backed by expert insights and innovative tools.

With a focus on integrity, trust, and growth, we empower our clients to make informed financial decisions and achieve their wealth goals.

Let us help you make your.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About