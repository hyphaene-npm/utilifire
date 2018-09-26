const execa = require('execa');
const pEachSeries = require('p-each-series');
const ora = require('ora');
const getSpinner = require('./getSpinner');

const setYarnCommands = async opts => {
	const { dest } = opts;
	const commands = [{ cmd: `yarn install`, cwd: dest }];
	return pEachSeries(commands, async ({ cmd, cwd }) => execa.shell(cmd, { cwd }));
};

const initYarn = async (dest, info) => {
	const promise = setYarnCommands({ dest, info });
	ora.promise(promise, getSpinner(`Running yarn install`));
	await promise;
};

module.exports = initYarn;
