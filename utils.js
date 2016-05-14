module.exports = {

  parseHost: (binary) => {
    const matches = /teeworlds_(info|ping)_([^:$]+)/.exec(binary);
    if (!matches)
      return null;
    return matches[2];
  },

  parsePort: (binary) => {
    const matches = /teeworlds_(info|ping)_[^:]+:([0-9]+)$/.exec(binary);
    if (!matches)
      return null;
    return matches[2];
  },

  isConfig: (arg) => {
    return arg === 'config';
  },

};