/*
 * @Author: 'zww' 335218152@qq.com
 * @Date: 2022-08-12 15:47:34
 * @LastEditors: 'zww' 335218152@qq.com
 * @LastEditTime: 2022-08-12 16:03:25
 * @FilePath: \node-cli\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const minimist = require('minimist');
const chalk  = require('chalk');

const argv = minimist(process.argv.slice(2));

console.log(chalk)

//console.log(argv)
console.log(chalk.blue('Hello') + ' ' + chalk.bgRed.red('World'));