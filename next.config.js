// module.exports = {
//     basePath: 'https://ryandev.github.io/RoadRash2-PasscodeGenerator/',
//     assetPrefix: 'https://ryandev.github.io/RoadRash2-PasscodeGenerator/RoadRash2-PasscodeGenerator/',
// }

// const isProd = process.env.NODE_ENV === 'production';
const isProd = false;
const githubRepoName = 'RoadRash2-PasscodeGenerator';
const githubAccountName = 'ryandev';


// module.exports = {
//   assetPrefix: isProd ? `/${githubRepoName}/` : '',
//   basePath: isProd ? `/https://${githubAccountName}/${githubRepoName}/` : '',
// };

module.exports = {
    assetPrefix: '',
}