// const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

const baseURL = 'https://api.github.com/repos/pcmueller';

// {
//   headers: {
//     authorization: `token ${API_KEY}`
//   }
// }

export const fetchRepo = async (repoName) => {
  return fetch(`${baseURL}/${repoName}`)
    .then(response => {
      handleErrors(response)
      return response.json()
    })
}

const handleErrors = (response) => {
  if (!response.ok) {
    console.log(response);
    throw new Error()
  }
}