const path = require('path');

module.exports = {
  entry: {
    main: './src/scripts/main.js',
    renderCandidates: './src/scripts/renderCandidate.js',
    elections: './src/scripts/elections.js',
    login: './src/scripts/index.js',
    error: './src/scripts/error.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};