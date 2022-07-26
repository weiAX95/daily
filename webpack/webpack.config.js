const path = require("path")
const env = process.env.node_env
module.export = {
  mode:env,
  entry:"./src/index.js",
  output:{
    path:path.join(__dirname,'build')
  }
}
