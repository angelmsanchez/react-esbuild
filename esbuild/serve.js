const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");

esbuild
  .serve(
    {
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
    }
  )
  .catch(() => process.exit());