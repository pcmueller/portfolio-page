import React from 'react';
import vhsEffect from '../../utilities/effects';

const Landing = () => {

  vhsEffect();

  return (
    <main 
      className='landing-page' 
      style={{"background":"url(images/VHS_Noise_Pack/2.png)", "width":"100vw", "height":"100vh", "backgroundSize":"cover"}}>
        <div className="container">
          <p className="subtitle">WELCOME TO</p>
          <div className="glitch" data-text="PMUELLER.net">PMUELLER.net</div>
          <div className="glow">PMUELLER.net.</div>
        </div>
        <div className="scanlines"></div>
    </main>
  )
}

export default Landing;