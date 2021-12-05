const env = process?.env ?? {};

const isProd = env.NODE_ENV === "production";
const githubRepoName = env.PUBLISH_GHREPONAME || "RoadRash2-PasscodeGenerator";
const githubAccountName = env.PUBLISH_GHREPOACCOUNT || "ryandev";

module.exports = {
  assetPrefix: isProd ? `/${githubRepoName}/` : "",
  basePath: isProd ? `/https://${githubAccountName}/${githubRepoName}/` : "",
};
