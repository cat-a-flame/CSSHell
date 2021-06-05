module.exports = {
    onPreBuild: async ({ utils: { run } }) => {
      await run.command(
        "node-sass src/sass/main.scss dist/css/main.css"
      );
    },
  };
  