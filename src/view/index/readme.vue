<template>
  <div class="readme-container">
        <code>
            <h2 class="title">系统说明：</h2>
            <ul class="detail">
              <li>
                  1.&nbsp;&nbsp;登录，库房管理（入库单， 出库单 库存余额表），订单管理（所有订单），客户管理（客户基本信息， 客户订单管理）</li>
              <li>
                  2.&nbsp;&nbsp;全部动态操作的按钮点击元素（例如增删改查、分页切换等），都已经在控制台打印出相关参数，实际开发时把这些参数按需提交给后端接口即可
              </li>
              <li>
                  3.&nbsp;&nbsp;如果此项目您觉得满意的话，记得给个好评哦，我们将用心为您服务！
              </li>
            </ul>
        </code>
  </div>
</template>
<script>
export default {

  data() {
    return {

    }
  }
};
</script>
<style type="text/css">
  li {
    list-style: none;
  }
  .readme-container {
    margin-top: 80px;
    margin-left: 50px;
    width: 90%;
    overflow: hidden;
    background: #eef1f6;
    padding: 20px;
  }
  .readme-container .title {
    padding-bottom: 20px;
  }
  .readme-container .detail>li {
    font-family: 微软雅黑;
    font-size: 15px;
    line-height: 3;
  }
</style>
