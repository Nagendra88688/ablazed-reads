import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Ablazed Reads</h2>
            <p className='fs-17'>
              A platform for books, by Nagendra Singh, a.k.a Ablazed Neer, with a true belief that 
              b ooks are windows into the depths of human emotions, capturing the essence of the human experience. They whisper wisdom from the past, guide us in the present, and illuminate paths for the future. In the embrace of a book, we discover the beauty of language, the symphony of words that dance upon the pages. Each book is a gateway to endless possibilities, inviting us to embark on extraordinary adventures and connect with diverse minds and cultures.
    
            </p>
            <p className='fs-17'>
              So...So....So...
              Let's dive into the captivating world of books, where imagination knows no bounds and knowledge finds its home. Within the pages, stories unfold like magic, transporting us to distant lands and introducing us to fascinating characters. Books are the gateway to wisdom, offering a sanctuary for curious minds seeking to explore, learn, and grow. They hold the power to inspire, ignite our passions, and broaden our perspectives. With every turn of a page, books embrace us with their warmth, inviting us to embark on incredible journeys and experience the extraordinary. So, let's embrace the beauty of books and unlock the limitless treasures they hold, for they are the companions that enlighten our souls and shape our lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
