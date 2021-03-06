const path = require('path');
const { mainModule } = require('process');

module.exports = {
    entry: './src/index.js',
    output: {
        filename:'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};