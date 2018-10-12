import pkg from './package.json';
import { external, needCss, mainInput } from './rollup/constants';
import formatBuilder from './rollup/formatBuilder';
import setConfig from './rollup/setConfig';

const jsExt = formatBuilder('umd');
const mainOutput = [jsExt(pkg.browser)];
const mainConfig = setConfig(mainInput, mainOutput, external, needCss);
const config = [mainConfig];

export default config;
