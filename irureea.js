const path = require('path');

module.exports = {
  // Other configuration options...
  
  resolve: {
    alias: {
      'three/addons': path.resolve(__dirname, 'node_modules/three/examples/jsm/')
    }
  },
  
  module: {
    rules: [
      // Other rules...
      
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
