import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//readme首页
import Readme from '@/view/index/readme'

//基本共享组件
import Login from '@/view/index/login'
import Index from '@/view/index/index'


//库房管理组件
import House from '@/view/warehouse/a-house'
import Instock from '@/view/warehouse/instock'
import Outstock from '@/view/warehouse/outstock'
import Remaining from '@/view/warehouse/remaining'



//客户管理组件
import Customer from '@/view/customer/a-customer'
import CustomerInfo from '@/view/customer/customerInfo'
import CustomerOder from '@/view/customer/customerOder'


//订单管理组件
import Order from '@/view/order/a-order'
import OrderAccount from '@/view/order/orderAccount'
import EditOrder from '@/view/order/editOrder'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
      name: '登录'
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: 'readme',
          component: Readme,
          name: '系统说明'
        },
        {
          path: 'house',
          component: House,
          children: [
            { path: 'instock', component: Instock, name: '入库单'  },
            { path: 'outstock', component: Outstock, name: '出库单'  },
            { path: 'remaining', component: Remaining, name: '库存余额'  }
          ]
        },
        {
          path: 'customer',
          component: Customer,
          children: [
            { path: 'customerInfo', component: CustomerInfo, name: '客户信息'  },
            { path: 'customerOder', component: CustomerOder, name: '客户订单管理'  },
          ]
        },
        {
          path: 'order',
          component: Order,
          children: [
            { path: 'orderAccount', component: OrderAccount, name: '所有订单' },
            { path: 'editOrder', component: EditOrder, name: '编辑发货' },
          ]
        },
      ]
    },
  ]
})
