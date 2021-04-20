module.exports = {
    onPreBuild: async ({ utils: { run } }) => {
      await run.command(
        "node-sass sass/main.scss _site/css/main.css"
      );
    },
  };
  