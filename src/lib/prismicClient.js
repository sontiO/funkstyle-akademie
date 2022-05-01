import * as prismic from "@prismicio/client";

const repoName = `prismic-testqw1`; // Fill in your repository name
const accessToken = process.env.apiKey;
const endpoint = prismic.getEndpoint(repoName);

const createClient = (fetch) => {
  const clientOptions = {
    fetch,
    accessToken,
    //routes,
  };
  const client = prismic.createClient(endpoint, clientOptions);
  return client;
};
export default createClient;
