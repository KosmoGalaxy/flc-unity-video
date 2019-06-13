const nodeFs = require('fs');
const copyDirectory = require('./copy-directory');
const createDirectory = require('./create-directory');
const deleteDirectory = require('./delete-directory');


const buildDir = 'build';
const dirName = 'FlcUnityVideo';
const src = `Assets/${dirName}`;
const dst = `${buildDir}/${dirName}`;
const licenseSrc = 'LICENSE';
const licenseDst = `${dst}/GoogleVR/LICENSE`;


if (!nodeFs.existsSync(buildDir))
  createDirectory(buildDir);

if (nodeFs.existsSync(dst))
  deleteDirectory(dst);

copyDirectory(src, dst, null, new RegExp('^.*\\.meta$'));
console.log(`"${src}" copied to "${dst}".`);

nodeFs.copyFileSync(licenseSrc, licenseDst);
console.log(`"${licenseSrc}" copied to "${licenseDst}".`);
