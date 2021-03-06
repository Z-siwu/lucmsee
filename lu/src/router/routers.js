import Main from '@/components/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  hideInTag: (false) 设为true后在页签不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default[
  {
    path: '/dashboard/login',
    name: 'login',
    meta: {
      title: '登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  }, {
    path: '/dashboard',
    name: '_home',
    redirect: '/dashboard/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/dashboard/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          // notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  }, {
    path: '/dashboard/systemManage',
    name: 'systemManage',
    component: Main,
    meta: {
      icon: 'ios-cog',
      title: '系统管理',
      access: ['Founder'],
      showAlways: true
    },
    children: [
      {
        path: '/dashboard/databases',
        name: 'databaseManage',
        meta: {
          title: '数据库监控',
          access: ['Developer']
        },
        component: () => import('@/view/system-configs/databases/list.vue')
      }, {
        path: '/dashboard/table_bak_record',
        name: 'tableBakRecord',
        meta: {
          title: '备份日志',
          hideInMenu: true,
          hideInTag: true
        },
        component: () => import('@/view/system-configs/table_bak_records/list.vue')
      }, {
        path: '/dashboard/tables',
        name: 'statusMap',
        meta: {
          title: '数据字典',
          access: ['Developer']
        },
        component: () => import('@/view/system-configs/status_maps/list.vue')
      }, {
        path: '/dashboard/system_config',
        name: 'systemConfig',
        meta: {
          title: '系统配置项'
        },
        component: () => import('@/view/system-configs/configs/list.vue')
      }, {
        path: '/dashboard/app_versions',
        name: 'appVersion',
        meta: {
          title: 'App版本管理'
        },
        component: () => import('@/view/system-configs/app_versions/list.vue')
      }
    ]
  }, {
    path: '/dashboard/resources',
    name: 'resourcesManage',
    component: Main,
    meta: {
      icon: 'ios-link',
      title: '资源管理',
      access: ['Founder', 'Maintainer'],
      showAlways: true
    },
    children: [
      {
        path: '/dashboard/attachments',
        name: 'attachmentsManage',
        meta: {
          title: '系统附件',
          access: ['Founder']
        },
        component: () => import('@/view/resources/attachments/list.vue')
      }, {
        path: '/dashboard/images',
        name: 'imageList',
        meta: {
          title: '图片列表',
          access: ['Founder', 'Maintainer']
        },
        component: () => import('@/view/resources/images/list.vue')
      }
    ]
  }, {
    path: '/dashboard/privilegeManage',
    name: 'privilegeManage',
    component: Main,
    meta: {
      icon: 'ios-lock',
      title: '权限管理',
      access: ['Founder', 'Maintainer', 'WebsiteEditor'],
      showAlways: true
    },
    children: [
      {
        path: '/dashboard/permissionList',
        name: 'permissionList',
        meta: {
          title: '权限列表',
          access: ['Founder', 'Maintainer']
        },
        component: () => import('@/view/privileges/permissions/list.vue')
      }, {
        path: '/dashboard/roleList',
        name: 'roleList',
        meta: {
          title: '角色列表',
          access: ['Founder', 'Maintainer']
        },
        component: () => import('@/view/privileges/roles/list.vue')
      }, {
        path: '/dashboard/userList',
        name: 'userList',
        meta: {
          title: '用户列表',
          access: ['Founder', 'Maintainer', 'WebsiteEditor']
        },
        component: () => import('@/view/privileges/users/list.vue')
      }
    ]
  }, {
    path: '/dashboard/newsSystem',
    name: 'newsSystem',
    component: Main,
    meta: {
      icon: 'ios-paper',
      title: '新闻系统',
      access: ['Founder', 'Maintainer', 'WebsiteEditor'],
      showAlways: true
    },
    children: [
      {
        path: '/dashboard/tagsManage',
        name: 'tagsManage',
        meta: {
          title: '标签管理'
        },
        component: () => import('@/view/news-system/tags/list.vue')
      }, {
        path: '/dashboard/articleCategories',
        name: 'articleCategory',
        meta: {
          title: '文章分类'
        },
        component: () => import('@/view/news-system/article_categories/list.vue')
      }, {
        path: '/dashboard/articleList',
        name: 'articleList',
        meta: {
          title: '文章列表'
        },
        component: () => import('@/view/news-system/articles/list.vue')
      }, {
        path: '/dashboard/carouselList',
        name: 'carouselList',
        meta: {
          title: '轮播图'
        },
        component: () => import('@/view/news-system/carousels/list.vue')
      }
    ]
  }, {
    path: '/dashboard/messageCenter',
    name: 'messageCenter',
    component: Main,
    meta: {
      icon: 'ios-notifications',
      title: '消息中心',
      access: ['Founder', 'Maintainer'],
      showAlways: true
    },
    children: [
      {
        path: '/dashboard/appMessages',
        name: 'appMessages',
        meta: {
          title: '站内信'
        },
        component: () => import('@/view/message-center/app_messages/list.vue')
      }, {
        path: '/dashboard/adminMessages',
        name: 'adminMessages',
        meta: {
          title: '后台消息'
        },
        component: () => import('@/view/message-center/admin_messages/list.vue')
      }
    ]
  }, {
    path: '/dashboard/systemSecurity',
    name: 'systemSecurity',
    component: Main,
    meta: {
      icon: 'ios-desktop',
      title: '系统安全',
      access: ['Founder', 'Maintainer', 'WebsiteEditor'],
      showAlways: true
    },
    children: [
      {
        path: '/dashboard/systemLogs',
        name: 'systemLogs',
        meta: {
          title: '操作日志'
        },
        component: () => import('@/view/system-security/logs/list.vue')
      }, {
        path: '/dashboard/userAgreements',
        name: 'userAgreements',
        meta: {
          title: '协议管理',
          access: ['Founder', 'Maintainer']
        },
        component: () => import('@/view/system-security/user_agreements/list.vue')
      }
    ]
  },
  {
    path: '/dashboard/systemSecurity',
    name: 'luDemos',
    component: Main,
    meta: {
      icon: 'ios-basket',
      title: '组件示例',
      showAlways: true
    },
    children: [
      {
        path: '/dashboard/ucer_amap',
        name: 'ucer_amap',
        meta: {
          title: '地图'
        },
        component: () => import('@/view/a-lu-demos/ucer-amap-demo.vue')
      },
      {
        path: '/dashboard/css',
        name: 'css',
        meta: {
          title: 'css样式'
        },
        component: () => import('@/view/a-lu-demos/css-demo.vue')
      },
      {
        path: '/dashboard/inputHelp',
        name: 'inputHelp',
        meta: {
          title: 'input-help'
        },
        component: () => import('@/view/a-lu-demos/input-help-demo.vue')
      },
      {
        path: '/dashboard/tableEdit',
        name: 'tableEdit',
        meta: {
          title: 'table-edit'
        },
        component: () => import('@/view/a-lu-demos/table-edit-demo.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  }, {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  }, {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
