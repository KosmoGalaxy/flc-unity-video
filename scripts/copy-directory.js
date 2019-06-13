const nodeFs = require('fs');
const nodePath = require('path');
const createDirectory = require('./create-directory');


function copyDirectory(srcPath, dstPath, includeRegex, excludeRegex) {
  createDirectory(dstPath);

  nodeFs.readdirSync(srcPath).forEach(file => {
    if (includeRegex && !includeRegex.test(file))
      return;

    if (excludeRegex && excludeRegex.test(file))
      return;

    const srcFilePath = nodePath.join(srcPath, file);
    const dstFilePath = nodePath.join(dstPath, file);
    const stats = nodeFs.statSync(srcFilePath);

    if (stats.isDirectory())
      copyDirectory(srcFilePath, dstFilePath, includeRegex, excludeRegex);
    else
      nodeFs.copyFileSync(srcFilePath, dstFilePath);
  });
}


module.exports = copyDirectory;
