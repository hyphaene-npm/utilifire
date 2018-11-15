# utilifire

> CLI for easily publishing modern React libraries with Rollup and example usage via create-react-app.

## Intro

**The purpose of this CLI is to make publishing our own libraries as easy as possible.**

## Features

*   Easy-to-use CLI
*   Handles all modern JS features
*   [Rollup](https://rollupjs.org/) for build process
*   [Babel](https://babeljs.io/) for transpilation

## Prerequisite :

*   use yarn

## Install

```bash
yarn global add utilifire
```

ou

```
npm install -g utilifire
```

## Creating a New Package

```bash
utilifire
```

Answer some basic prompts about your module, and then the CLI will perform the following steps:

*   copy over the template to a new folder in the current directory
*   install dependencies via yarn
*   link packages together for local development
*   initialize local git repo

At this point, the new module is all setup for local development.

## Development


You'll run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
yarn start # runs rollup with watch flag
```


### Advices

Please consider declaring your dependencies as external in order to reduce the build size after using the CLI to generate a folder.
( See ```rollup/constants.js``` file)

## License

MIT © [Maximilien Garenne](https://github.com/hyphaene)
