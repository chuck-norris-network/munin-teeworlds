module.exports = {

  parseHost: (binary) => {
    const matches = /teeworlds_ping_([^:]+):[0-9]+$/.exec(binary);
    if (!matches)
      return null;
    return matches[1];
  },

  parsePort: (binary) => {
    const matches = /teeworlds_ping_[^:]+:([0-9]+)$/.exec(binary);
    if (!matches)
      return null;
    return matches[1];
  },

};
