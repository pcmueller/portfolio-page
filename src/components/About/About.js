import React from 'react';
import NavBar from '../NavBar/NavBar';

const About = () => {

  return (
    <main className='about-page' pageWrapId={ "page-wrap" }>
      <NavBar/>
      <div className='banner'>BANNER</div>
      <section className='about-container'>
        <h1 className='about-title'>ABOUT ME</h1>
        <article className='about-section'>
          <div className='about-top'>
            <p className='about-intro'>Aenean luctus tortor ut erat tempus pretium. Nunc in viverra nunc. Etiam mauris lectus, aliquet id luctus mattis, finibus ac leo. Etiam pretium nunc mauris, varius pretium lacus fringilla non. In pharetra elementum tortor nec tempor. Praesent et rhoncus elit. Donec ex nulla, bibendum eu neque sit amet, consectetur fermentum diam.</p>
            <article className='gh-pic'>
              <div className='pic-link'>
                <a href='https://github.com/pcmueller'>
                  <img src='https://avatars.githubusercontent.com/u/51062974?v=4' alt='Peter Muellerleile'/>
                </a>
              </div>
            </article>
          </div>
          <div className='about-body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non turpis a nibh pretium tempor. Morbi id placerat leo. Nunc at metus diam. Etiam euismod est id orci interdum, eu gravida velit vulputate. Integer vitae ipsum bibendum, dapibus sem nec, pellentesque erat. Nulla lacinia risus eget sagittis hendrerit. Morbi quam turpis, ullamcorper consequat neque ornare, commodo hendrerit massa. Ut iaculis tempor urna. Cras fringilla neque ante. Duis at tincidunt augue. Aliquam erat volutpat. Proin quis consequat erat.</p>
            <p>Aenean luctus tortor ut erat tempus pretium. Nunc in viverra nunc. Etiam mauris lectus, aliquet id luctus mattis, finibus ac leo. Etiam pretium nunc mauris, varius pretium lacus fringilla non. In pharetra elementum tortor nec tempor. Praesent et rhoncus elit. Donec ex nulla, bibendum eu neque sit amet, consectetur fermentum diam.</p>
            <p>Cras sed finibus ex. Nam quis odio ut risus condimentum dapibus non sit amet lacus. Curabitur et aliquam mi. Integer non libero at ante porta congue non nec eros. Duis eu placerat augue. Fusce maximus justo sollicitudin risus hendrerit lacinia. Ut efficitur lacinia lacus eget mollis. Fusce tincidunt ligula est, ac vehicula tortor vehicula quis. Phasellus blandit lobortis mauris. Morbi sit amet mauris vel dolor blandit fermentum non fringilla erat. Nam vestibulum sollicitudin dui, ac congue augue varius quis. Nulla gravida consequat nulla, nec varius eros pretium eu. Praesent nec justo tincidunt, dignissim neque id, feugiat lorem. Donec sollicitudin nisl a rhoncus iaculis. Suspendisse convallis lacinia mi nec dignissim.</p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default About;