import * as prismic from "@prismicio/client";

const repoName = `prismic-testqw1`; // Fill in your repository name
const accessToken = process.env.apiKey;
const endpoint = prismic.getEndpoint(repoName);

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
//const routes = [{}];

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
