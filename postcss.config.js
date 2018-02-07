const plugins = [
  require('postcss-easy-import')({ prefix: '_' }), // keep this first
  require('autoprefixer')({ /* ...options */ }), // so imports are auto-prefixed too
  // require('cssnano')
];

if (process.env.NODE_ENV !== 'development') {
  plugins.push(
    require('cssnano')
  );
}

module.exports = {
  plugins
};
