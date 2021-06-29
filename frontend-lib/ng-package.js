const { resolve } = require('path');

const [outputPath] = process.argv.slice(-1);

module.exports = {
  dest: resolve(outputPath),
  assets: [
      "src/assets/play.svg",
      "src/assets/*.mp4"
  ],
  lib: {
    entryFile: 'src/public-api.ts',
  }
}
