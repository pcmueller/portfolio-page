import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import Cards from '../Cards/Cards';

const Portfolio = () => {


  return (
    <main className='portfolio-page' id='outer-container'>
      <NavMenu/>
      <div className='banner'>
        <img src='/images/canva-banner.png' alt='banner'/>
      </div>
      <section className='portfolio-container' id='page-wrap'>
        <h1 className='portfolio-title'>PORTFOLIO</h1>
        <article className='portfolio-section'>
          <Cards></Cards>
        </article>
      </section>
    </main>
  )
}

export default Portfolio;