import pkg from './package.json';
import { external, needCss, mainInput } from './utils/constants';
import formatBuilder from './utils/formatBuilder';
import setConfig from './utils/setConfig';

const jsExt = formatBuilder('umd');
const mainOutput = [jsExt(pkg.browser)];
const mainConfig = setConfig(mainInput, mainOutput, external, needCss);
const config = [mainConfig];

export default config;
