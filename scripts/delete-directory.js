const nodeFs = require('fs');
const nodePath = require('path');


function deleteDirectory(path) {
  nodeFs.readdirSync(path).forEach(file => {
    const filePath = nodePath.join(path, file);
    const stats = nodeFs.statSync(filePath);

    if (stats.isDirectory())
      deleteDirectory(filePath);
    else
      nodeFs.unlinkSync(filePath);
  });

  nodeFs.rmdirSync(path);
}


module.exports = deleteDirectory;
