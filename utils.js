module.exports = {};

module.exports.parseHost = (binary) => {
  const matches = /teeworlds_(players|ping)_([^:$]+)/.exec(binary);
  if (!matches)
    return null;
  return matches[2];
};

module.exports.parsePort = (binary) => {
  const matches = /teeworlds_(players|ping)_[^:]+:([0-9]+)$/.exec(binary);
  if (!matches)
    return null;
  return matches[2];
};

module.exports.parseTimeout = (env) => {
  if (env)
    return parseInt(env);
  return 5000;
};

module.exports.isConfig = (arg) => {
  return arg === 'config';
};

module.exports.waterfall = (callbacks) => {
  const first = callbacks[0]();
  return callbacks.slice(1).reduce(function (accumulator, callback) {
    return accumulator.then(callback);
  }, first);
};
