const { resolve } = require('path');

const [outputPath] = process.argv.slice(-1);

module.exports = {
    dest: resolve(outputPath),
    assets: [
        "src/assets/*.svg",
        "src/assets/black.mp4"
    ],
    lib: {
        entryFile: 'src/index.ts',
        cssUrl: "inline"
    }
}
