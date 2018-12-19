const globby = require('globby');
const mkdirp = require('make-dir');
const path = require('path');

const copyAllFiles = require('./copyAllFiles');
const initGitRepository = require('./initGitRepo');
const initYarn = require('./initPackageManager');

const generateLibrary = async ({ name, description, author, licence }) => {
	const parts = name.split('/');
	const shortName = parts[parts.length - 1];
	const dest = path.join(process.cwd(), shortName);

	await mkdirp(dest);

	const source = path.join(__dirname, '../../template');
	const files = await globby(source, { dot: true });
	const info = {
		name,
		description,
		author,
		licence,
		shortName,
		dest,
	};

	await copyAllFiles(files, source, dest, info);
	await initYarn(dest, info);
	await initGitRepository(dest, name);

	return dest;
};

module.exports = generateLibrary;
