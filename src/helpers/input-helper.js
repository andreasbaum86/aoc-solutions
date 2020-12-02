const fs = require('fs');

exports.getInputArrayAsStrings = (path) => fs.readFileSync(path, 'utf8').split(/\r?\n|\r/g);

exports.getInputArrayAsNumbers = (path) => this.getInputArrayAsStrings(path)
  .map((line) => parseInt(line, 10));
