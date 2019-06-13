const nodeFs = require('fs');
const nodePath = require('path');


module.exports = function(path) {
  const parts = path.split('/');
  path = '';

  parts.forEach(part => {
    path = nodePath.join(path, part);

    if (!nodeFs.existsSync(path)) {
      nodeFs.mkdirSync(path);
    }
  });
};
