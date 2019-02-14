/**
  配置文件中的配置项名称不能随意改动，否则会影响到其它地方
  如： store/module/app.js中
  import config from '@/config'
   const { homeName } = config
*/
export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'Lucmsee',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'http://lucmsee.test',
    pro: 'http://lucmsee.test'
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  },
  domainForFileSystem: 'https://filesystem.codehaoshi.com', // 文件管理系统域名，[图片文件传到文件服务器上]
  platName: 'lucmsee' // 平台名称  plat，文件上传时用到
}
