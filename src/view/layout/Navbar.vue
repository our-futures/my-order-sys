<template>
  <el-menu class="navbar" mode="horizontal">
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" src="../../assets/ying.jpg">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>

  export default {
    components: {
    },
    data() {
      return {
      };
    },
    methods: {
      logout() {
        this.$router.push("/");
      }
    }
  };
</script>

<style scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 45px;
  }
  .avatar-wrapper {
    cursor: pointer;
    margin-top: 5px;
    position: relative;
  }
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }
  .el-icon-caret-bottom {
    position: absolute;
    right: -25px;
    top: 20px;
    font-size: 12px;
  }
</style>
