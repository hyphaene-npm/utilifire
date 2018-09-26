const inquirer = require('inquirer');
const validateNpmName = require('validate-npm-package-name');
const isNameAvailable = require('npm-name');

const validatePackageName = async name => {
	const result = validateNpmName(name).validForNewPackages;
	let isAvailable = true;
	try {
		isAvailable = await isNameAvailable(name);
	} catch ({ statusCode }) {
		if (statusCode !== 500) {
			isAvailable = false;
		}
	}
	return name && result && isAvailable;
};

module.exports = async () => {
	const info = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Package Name ( be patient, async validation ;) )',
			validate: name => validatePackageName(name),
		},
		{
			type: 'input',
			name: 'description',
			message: 'Package Description',
			default: '',
		},
		{
			type: 'input',
			name: 'author',
			message: 'Author',
			default: 'Maximilien Garenne <maximilien.garenne@gmail.com>',
		},
		{
			type: 'input',
			name: 'license',
			message: 'License',
			default: 'MIT',
		},
	]);
	return info;
};
