# npm-cli

> CLI for easily publishing modern React libraries with Rollup and example usage via create-react-app.

## Intro

**The purpose of this CLI is to make publishing our own React components as simple as possible.**

## Features

*   Easy-to-use CLI
*   Handles all modern JS features
*   Bundles `cjs` and `es` module formats
*   [create-react-app](https://github.com/facebookincubator/create-react-app) for example usage and local dev
*   [Rollup](https://rollupjs.org/) for build process
*   [Babel](https://babeljs.io/) for transpilation
*   [Jest](https://facebook.github.io/jest/) for testing
*   uses storybook
*   handles scss files

## Prerequisite :

*   use yarn

## Install

```bash
yarn global add @cheetahdigital/npm-cli
```

ou

```
npm install -g @cheetahdigital/npm-cli
```

## Creating a New Module

```bash
npm-cli
```

Answer some basic prompts about your module, and then the CLI will perform the following steps:

*   copy over the template to a new folder in the current directory
*   install dependencies via yarn
*   link packages together for local development
*   initialize local git repo

At this point, the new module is all setup for local development.

## Development

Local development is broken into two parts.

First, you'll run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
yarn start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
cd example
yarn start # runs create-react-app dev server
```

The third one is for storybook :

```bash
yarn storybook
```

Now, anytime you make a change to your component in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

![](https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)

## License

MIT © [Maximilien Garenne](https://github.com/hyphaene)

Special Thx to [Travis Fischer](https://github.com/transitive-bullshit), this project is a fork of his [repo](https://github.com/transitive-bullshit/create-react-library)
