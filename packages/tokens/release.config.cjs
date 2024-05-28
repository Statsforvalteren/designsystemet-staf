module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    'semantic-release-yarn',
    '@semantic-release/github',
    '@semantic-release/git',
  ],
  tagFormat: 'tokens-v${version}',
};
