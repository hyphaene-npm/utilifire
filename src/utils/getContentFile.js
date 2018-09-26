const handlebars = require('handlebars');
const fs = require('fs');
const { UTF8 } = require('../constants');

const getContentFile = (file, info) => handlebars.compile(fs.readFileSync(file, UTF8))(info);

module.exports = getContentFile;
