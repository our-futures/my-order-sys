<template>
        <el-col>
          <el-menu default-active="2" class="menu-demo">

            <router-link to="/index/readme">
                <el-menu-item index="/index/readme" class="home">
                    <i class="fa fa-home menu-icon" style="font-size: 19px;"></i>首页
                </el-menu-item>
            </router-link>

            <el-submenu index="1">
              <template slot="title"><i class="fa fa-university menu-icon"></i>库房管理<i class="el-submenu__icon-arrow el-icon-caret-bottom"></i></template>
                <router-link to="/index/house/instock"><el-menu-item index="1-1">入库单</el-menu-item></router-link>
                <router-link to="/index/house/outstock"><el-menu-item index="1-2">出库单</el-menu-item></router-link>
                <router-link to="/index/house/remaining"><el-menu-item index="1-4">库存余额</el-menu-item></router-link>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title"><i class="fa fa-calendar-minus-o menu-icon"></i>订单管理<i class="el-submenu__icon-arrow el-icon-caret-bottom"></i></template>
                <router-link to="/index/order/orderAccount"><el-menu-item index="3-2">所有订单</el-menu-item></router-link>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title"><i class="fa fa-address-book menu-icon"></i>客户管理<i class="el-submenu__icon-arrow el-icon-caret-bottom"></i></template>
                <router-link to="/index/customer/customerInfo"><el-menu-item index="5-1">客户基本信息</el-menu-item></router-link>
                <router-link to="/index/customer/customerOder"><el-menu-item index="5-3">客户订单管理</el-menu-item></router-link>
            </el-submenu>
          </el-menu>
        </el-col>
</template>

<script>
  export default {
    data() {
      return {
        levelList: null
      }
    },
  }
</script>

<style>
  .menu-icon {
    font-size: 16px;
    padding-right: 15px;
  }
</style>
