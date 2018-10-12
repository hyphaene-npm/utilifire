import getPlugins from './getPlugins';
import { pluginsArray } from './constants';

const setConfig = (input, output, external, needCss = false) => ({
	input,
	output,
	external,
	plugins: getPlugins(pluginsArray, needCss),
});

export default setConfig;
