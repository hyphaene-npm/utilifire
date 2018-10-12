import {} from './constants';

const formatBuilder = format => fileName => ({
	file: fileName,
	format,
	name: 'Whatson',
	globals: {},
});

export default formatBuilder;
