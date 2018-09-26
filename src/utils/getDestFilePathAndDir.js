const path = require('path');

const getDestFilePathAndDir = (dest, fileRelativePath) => {
	const destFilePath = path.join(dest, fileRelativePath);
	return [path.join(dest, fileRelativePath), path.parse(destFilePath).dir];
};

module.exports = getDestFilePathAndDir;
