import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {

  const containerRef = useRef();
  const { current } = containerRef;

  useEffect(drawLines, [current]);

  function getHeight(screen){
    return screen.innerHeight
      || screen.clientHeight;
  }

  function drawLines() {
    let screen = document.querySelector('.landing-page');

    const lines = document.getElementsByClassName('line');
    if (lines.length) {
      for (let i = 0; i < lines.length; i++) {
          screen.removeChild(lines[i]);
      }
    }
    
    for (let i = 0; i < getHeight(screen)/10; i++){
      const line = document.createElement("div");
      line.className = `line line-${i}`;
      line.style.top = `${i * 10}px`;
      const time = Math.random() * 5;
      line.style.animation = `lines ${time}s infinite`;
      screen.appendChild(line) ;
    }
  }

  window.onresize = function(event) {
    drawLines();
  };

  return (
    <main className='landing-page'>
        <div className='screen'>
          <p className='glitch'>WELCOME TO</p>
          <Link to={`/about`} 
            className='enter-link'
          >
            <p className='glitch'>PETE CODES</p>
          </Link>
        </div>
    </main>
  )
}

export default Landing;