const path = require("path")
const env = process.env.node_env
module.exports = {
  mode:env,
  entry:"./src/index.js",
  output:{
    path:path.join(__dirname,'test'),
    filename:'bundle.js'
  },
  module:{
    rules:[
        {test:/\.css$/,use:['style-loader',"css-loader"]},
        {test:/\.(png|jpg)$/,use:['file-loader']}
    ]
  }
}
