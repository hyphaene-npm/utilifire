#!/usr/bin/env node

require('util.promisify/shim')();

const meow = require('meow');
const path = require('path');

const generateLibrary = require('./src/utils/generateLibrary');
const promptLibraryInfo = require('./src/prompt');

module.exports = async () => {
	const info = await promptLibraryInfo();
	await generateLibrary(info);
	const { name } = info;
	const dest = path.join(process.cwd(), name);
	return { name, dest };
};

if (!module.parent) {
	meow(`
		Usage
			$ npm-cli
	`);

	module
		.exports()
		.then(({ name, dest }) => {
			console.log(`

Your module has been created at ${dest}.

To get started, simply run:
$ cd ${name} && yarn start
`);

			process.exit(0);
		})
		.catch(err => {
			console.error(err);
			process.exit(1);
		});
}
