import React, { useEffect, useState } from "react";

const Card = (data) => {
  
  const [ repo, setRepo ] = useState({});

  useEffect(() => {
    if (data) {
      setRepo(data.repo);
      console.log(data.repo);
    }
  }, []);

  if (!repo) {
    return (
      <article className='card'>
        <span>Loading...</span>
      </article>
    )
  }

  return (
    <article className='card'>
      <span>{repo.name}</span>
    </article>
  )
}

export default Card;