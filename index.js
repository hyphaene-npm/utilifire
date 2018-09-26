#!/usr/bin/env node

require('util.promisify/shim')();

const meow = require('meow');
const path = require('path');

const generateLibrary = require('./src/utils/generateLibrary');
const promptLibraryInfo = require('./src/prompt');

const main = async () => {
	const info = await promptLibraryInfo();
	await generateLibrary(info);
	const { name } = info;

	const nameSplitted = name.split('/');
	const folderName = nameSplitted.length > 1 ? nameSplitted[1] : nameSplitted[0];
	const dest = path.join(process.cwd(), name);
	return { folderName, dest };
};

if (!module.parent) {
	meow(`
		Usage
			$ npm-cli
	`);

	main()
		.then(({ folderName, dest }) => {
			console.log(`

Your module has been created at ${dest}.

To get started, simply run:
$ cd ${folderName} && yarn start
`);

			process.exit(0);
		})
		.catch(err => {
			console.error(err);
			process.exit(1);
		});
}
module.exports = main;
