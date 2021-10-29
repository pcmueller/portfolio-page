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

  const formatTopics = (topics) => {
    const format = topics.map(str => {
      return separateWords(str, '-');
    });
    return format.join(', ');
  }

  const separateWords = (str, char) => {
    return str.replace(char, ' ');
  }

  if (!repo?.name?.length) {
    return (
      <article className='card'>
        <span>Loading...</span>
      </article>

    )
  } else {
    return (
      <article className='card'>
        <span>{separateWords(repo?.name, '-').toUpperCase()}</span>
        <span>{repo?.description}</span>
        <span>{repo?.language}</span>
        <span>{formatTopics(repo?.topics)}</span>
      </article>
    )
  }
}

export default Card;