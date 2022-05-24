const path = require('path');

module.exports = {
  entry: {
	'Count' : './javascript/Count.js',
	'Dashboard' : './javascript/Dashboard.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};