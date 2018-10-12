import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const getPlugins = (pluginsArray, needCss = false) => {
	// /!\ css plugin needs to be at index 1 /!\
	if (needCss) {
		pluginsArray.splice(1, 0, postcss({ extract: true, plugins: [autoprefixer] }));
	}
	return pluginsArray;
};

export default getPlugins;
