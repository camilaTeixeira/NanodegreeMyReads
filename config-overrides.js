const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config,
  ); // change importing css to less
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#17BEBB',
      '@layout-header-background': '#40948a',
      '@font-size-base': '12px',
      // '@line-height-base': '1.0',
      '@form-item-margin-bottom': '14px',
    },
  })(config, env);
  return config;
};
