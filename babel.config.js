
function cachier() {
  return process.env.NODE_ENV === 'development';
};

module.exports = function(api) {
  api.cache(cachier);

  return {
    "presets": ["@babel/preset-env"],
    "plugins": [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-syntax-dynamic-import",
      "transform-export-extensions"
    ]
  }
};
