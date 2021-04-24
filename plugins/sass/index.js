module.exports = {
    onPreBuild: async ({ utils: { run } }) => {
      await run.command(
        "node-sass src/sass/main.scss _site/css/main.css"
      );
    },
  };
  