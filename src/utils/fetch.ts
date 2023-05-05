const fetchGithubApi = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return { message: err };
  }
};

export default fetchGithubApi;
