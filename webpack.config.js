const path = require('path');

module.exports = {
    entry: './script.js',
    output: {
        path: path.resolve(__dirname, 'public', 'scripts'),
        filename: 'bundle.js'
    },
    mode: "production"
}