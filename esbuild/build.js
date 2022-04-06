const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");

esbuild.build({
  entryPoints: ["./src/index.js"],
  outfile: "./public/js/app.js",
  minify: true,
  bundle: true,
  loader: {
    ".js": "jsx",
  },
  plugins: [inlineImage()],
  watch: {
    onRebuild(err) {
      console.log('watch', err);
    }
  }
}).catch(() => process.exit(1));