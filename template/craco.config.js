const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // override theme here
            // modifyVars: { '@primary-color': '#000000' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
