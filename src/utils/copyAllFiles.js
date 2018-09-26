const fs = require('fs');
const mkdirp = require('make-dir');
const path = require('path');
const ora = require('ora');
const pEachSeries = require('p-each-series');
const getSpinner = require('./getSpinner');
const getDestFilePathAndDir = require('./getDestFilePathAndDir');
const getContentFile = require('./getContentFile');
const { UTF8 } = require('../constants');

const copyTemplateFile = async ({ file, source, dest, info }) => {
	const fileRelativePath = path.relative(source, file);
	const [destFilePath, destFileDir] = getDestFilePathAndDir(dest, fileRelativePath);
	const content = getContentFile(file, info);

	await mkdirp(destFileDir);
	fs.writeFileSync(destFilePath, content, UTF8);

	return fileRelativePath;
};

const copyAllFiles = async (files, source, dest, info) => {
	const promise = pEachSeries(files, async file =>
		copyTemplateFile({ file, source, dest, info })
	);
	ora.promise(promise, getSpinner(`Copying template to ${dest}`));
	await promise;
};

module.exports = copyAllFiles;
