module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          prettier: false,
          svgo: false,
          svgoConfig: { plugins: [{ removeViewBox: false }] },
          titleProp: true,
          ref: true,
        },
      },
    ],
  });
  return config;
};
