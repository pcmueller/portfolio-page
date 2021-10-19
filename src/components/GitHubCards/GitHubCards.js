import React, { useState, useEffect } from "react";
import { fetchRepo } from "../../utilities/apiCalls.js";
import RepoCard from "../RepoCard/RepoCard";
import { Grid } from "@material-ui/core";

const GitHubCards = () => {

  const [ repoData, setRepoData ] = useState([]);

  useEffect(() => {
    const repoNames = [
      'hookshot',
      'the-wormhole',
      'cyclorama',
    ];

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

  return (
    // <></>
    <Grid container spacing={1}>
      {repoData?.map((data, i) => (
        <RepoCard repo={data} key={i} language={"english"} />
      ))}
    </Grid>
  );
}

export default GitHubCards;