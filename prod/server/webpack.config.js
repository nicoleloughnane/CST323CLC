const path = require("path");
const webpack = require("webpack");

let ENVIRONMENT_VARIABLES = {
  "process.env.ENVIRONMENT": JSON.stringify("production"),
  "process.env.API_URL": JSON.stringify(
    "mongodb+srv://dbUser:dbPassword@cst323cluster.zrtwlfq.mongodb.net/?retryWrites=true&w=majority"
  ),
  "process.env.PORT": JSON.stringify("3000"),
};

module.exports = {
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.bundle.js",
  },
  target: "node",
  plugins: [new webpack.DefinePlugin(ENVIRONMENT_VARIABLES)],
};
