module.exports = {
  entry: {
    app: ["./src/main.jsx"]
  },
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }
    ]
  }
}
