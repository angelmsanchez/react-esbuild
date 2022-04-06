const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");
// import serve, { error, log } from 'create-serve';
const serve = require("create-serve");

esbuild
  .build({
    watch: {
      onRebuild(err) {
        serve.update();
        err ? serve.error('× Failed') : serve.log('✓ Updated');
      }
    }
  })
  .catch(() => process.exit());

serve.serve.start({
  servedir: "public",
  port: 8000,
},
  {
    entryPoints: ["./src/index.js"],
    outfile: "./public/js/app.js",
    bundle: true,
    loader: {
      ".js": "jsx",
    },
    plugins: [inlineImage()],
  });
