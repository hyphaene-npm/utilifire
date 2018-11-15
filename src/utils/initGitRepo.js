const fs = require('fs');
const path = require('path');
const execa = require('execa');
const ora = require('ora');

const setupGitCommands = async (dest, name) => {
	const gitIgnorePath = path.join(dest, '.gitignore');
	fs.writeFileSync(
		gitIgnorePath,
		`
# See https://help.github.com/ignore-files/ for more about ignoring files.

# dependencies
node_modules

# builds
build
dist

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`,
		'utf8'
	);

	const cmd = `git init && git add . && git commit -m "init ${name}@0.0.0"`;
	return execa.shell(cmd, { cwd: dest });
};

const initGitRepository = async (dest, name) => {
	const promise = setupGitCommands(dest, name);
	ora.promise(promise, 'Initializing git repo');
	await promise;
};

module.exports = initGitRepository;
