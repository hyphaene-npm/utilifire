import pkg from './package.json';
import { mainInput } from './rollup/constants';
import { setConfig, formatBuilder } from './rollup/utils';

const jsExt = formatBuilder('umd');
const mainOutput = [jsExt(pkg.browser)];
const mainConfig = setConfig(mainInput, mainOutput);
const config = [mainConfig];

// https://github.com/rollup/rollup/issues/703

export default config;
