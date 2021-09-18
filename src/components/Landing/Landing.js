import React from 'react';
import vhsEffect from '../../utilities/effects';

const Landing = () => {

  vhsEffect();

  return (
    <main 
      className='landing-page' 
      style={{"background":"url(images/VHS_Noise_Pack/2.png)", "width":"100vw", "height":"100vh", "backgroundSize":"cover"}}>
        <h1 id='text'>hello world.</h1>
    </main>
  )
}

export default Landing;