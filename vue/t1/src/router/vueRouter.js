/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-29 09:21:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-29 10:16:10
 * @FilePath: \my-appd:\work\self\daily\vue\t1\src\router\vueRouter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let _Vue = ''
class VueRouter{
  constructor(options){
    this.options = options
    this.routes = options.routes
    window.addEventListener('popState',()=>{
      this.currentUrl  = ''
    })
  }
  initRoute() { 
    this.routes.forEach(element => {
    });
  }
  initComponent() {
    _Vue.component('router-link', {

    })
    _Vue.component('router-view', {
      render(h) {
        return h('a', this)
      },
    })
  }
  static install(Vue){
    _Vue = Vue
  }

}

export default VueRouter
