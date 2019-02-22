const path = require('path');
const tsNode = require('ts-node');
const tsconfigPaths = require('tsconfig-paths');

const tsconfigPath = path.join(__dirname, 'tools/build/tsconfig.json');
const tsconfig = require(tsconfigPath);

tsNode.register({
  project: tsconfigPath
});

tsconfigPaths.register({
  baseUrl: path.dirname(tsconfigPath),
  paths: tsconfig.compilerOptions.paths
});

require('./tools/build/gulpfile');
