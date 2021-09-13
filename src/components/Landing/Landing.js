import React from 'react';

const Landing = () => {
  drawLines();

  function getHeight(){
    return window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;
  }

  function drawLines(){
    const lines = document.getElementsByClassName('line');
    if (lines.length) {
      for (let i = 0; i < lines.length; i++) {
          document.body.removeChild(lines[i]);
      }
    }
    
    for (let i = 0; i < getHeight()/10; i++){
      const line = document.createElement("div");  
      line.className = `line line-${i}`;
      line.style.top = `${i * 10}px`;
      const time = Math.random() * 5;
      line.style.animation = `lines ${time}s infinite`;
      document.body.appendChild(line) ;
    }
  }

  window.onresize = function(event) {
    drawLines();
  };
  return (
    <main className='landing-page' style={{"background":"url(images/VHS_Noise_Pack/2.png)"}}>
      LANDING PAGE
    </main>
  )
}

export default Landing;