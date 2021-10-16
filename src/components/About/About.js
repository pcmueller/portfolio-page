import React from 'react';
import NavMenu from '../NavMenu/NavMenu';

const About = () => {

  return (
    <main className='about-page' id='outer-container'>
      <NavMenu/>
      <div className='banner'>
        <img src='/images/canva-banner.png' alt='banner'/>
      </div>
      <section className='about-container' id='page-wrap'>
        <h1 className='about-title'>ABOUT ME</h1>
        <article className='about-section'>
          <div className='about-top'>
            <div className='blurb-left'>
              <span>Technical Skills:</span>
              <p className='list-items'>
                {`JavaScript ES5/ES6 | React
                React Router | Hooks | Redux 
                HTML5 | CSS/Sass/SCSS | UI/UX 
                Git/GitHub | TravisCI | Heroku
                Cypress | Mocha & Chai`}
              </p>
            </div>
            <article className='gh-pic'>
              <div className='pic-link'>
                <a href='https://github.com/pcmueller'>
                  <img src='https://avatars.githubusercontent.com/u/51062974?v=4' alt='Peter Muellerleile'/>
                </a>
              </div>
            </article>
            <div className='blurb-right'>
              <span>Professional Skills:</span>
              <p className='list-items'>
                {`Object-Oriented Programming
                Test-Driven Development
                RESTful API fetching
                Project management
                Modular project architecture
                Developer empathy
                Responsive UI design
                User accessibility
                Continuous Integration`}
              </p>
            </div>
          </div>
          <div className='about-body'>
            {`Former bartender, restaurant manager, and all-around service industry professional now entering the tech workforce as a software engineer. Throughout my life and career I've always held a love of problem-solving, aesthetic design, and interpersonal communication, and I'm looking forward to fostering and channeling these passions in my new role as a developer.\n
            I enjoy building user-friendly applications that provide practical solutions to every day problems. My career goal is to continue learning, growing, and building as part of a collaborative, goal-oriented team, and to write clean, thoughtful, and empathetic code in the process.\n
            Proficient in JavaScript ES5/ES6, React, HTML5, CSS/Sass, and other front-end technologies.  Emphasis on Object-Oriented Programming, Test-Driven Development, RESTful data fetching, modular architecture, user accessibility and responsive UI design.\n
            `}
          </div>
        </article>
      </section>
    </main>
  )
}

export default About;