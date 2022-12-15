module.exports = (api) => {
  api.cache(true);

  const plugins = [
    '@babel/plugin-proposal-optional-chaining',
  ];

  const presets = [
    ['@babel/preset-env'],
    ['@babel/preset-react', {
      // This is to opt into the new JSX Transform
      // (https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html).
      // This will be default in Babel 8, so we can remove this at that time.
      runtime: 'automatic',
    }],
    '@babel/preset-typescript',
  ];

  if (process.env.NODE_ENV === 'test') {
    // Use async/await in Jest: https://github.com/facebook/jest/issues/7579#issuecomment-457069424
    presets[0].push({ targets: { node: 'current' } });
  }

  return { plugins, presets };
};
