import React, { useState, useEffect } from "react";
import NavMenu from '../NavMenu/NavMenu';
import Card from "../Card/Card";
import { fetchRepo } from "../../utilities/apiCalls.js";

const Portfolio = () => {
  const [ repoData, setRepoData ] = useState([]);
  const [ repoCards, setRepoCards ] = useState([]);
  const repoNames = [
    'hookshot',
    'the-wormhole',
    'cyclorama',
    'nyt-reader'
  ];

  useEffect(() => {
    const getRepoData = (name) => {
      fetchRepo(name)
        .then(response => {
          if (response) {
            setRepoData(data => [ ...data, response ]);
          }
        })
        .catch(error => {
          console.log(error);
      })
    }
    if (!repoData.length) {
      repoNames.forEach(name => {
        getRepoData(name);
      })
    }
  }, [repoData.length]);

  useEffect(() => {
    if (repoData.length === repoNames.length) {
      const cards = repoData.map((data, i) => ( 
        <Card repo={data} key={i} />
      ));
      setRepoCards(cards);
    }
  }, [repoData]);

  return (
    <main className='portfolio-page' id='outer-container'>
      <NavMenu />
      <div className='banner'>
        <img src='/images/canva-banner.png' alt='banner'/>
      </div>
      <section className='portfolio-container' id='page-wrap'>
        <h1 className='portfolio-title'>PORTFOLIO</h1>
        <article className='portfolio-section'>
          {repoCards}
        </article>
      </section>
    </main>
  )
}

export default Portfolio;