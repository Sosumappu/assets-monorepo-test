const { composePlugins, withNx, withWeb } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');


// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact({svg:true}), withWeb(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  return config;
});
