<template>
  <div class="inContainer">
    <div class="inbox">
      <div class="grid">
        <div class="layoutitem" style="width:100%;border:none;">
          <el-table :data="IntableList" border style="width: 100%"  :default-sort = "{prop: 'ID', order: 'ascending'}">
            <el-table-column prop="number" label="编号" width="110"></el-table-column>
            <el-table-column prop="ID" label="ID" width="150" sortable> </el-table-column>
            <el-table-column prop="spbh" label="商品编号" width="220"> </el-table-column>
            <el-table-column prop="name" label="商品名称" width="220"> </el-table-column>
            <el-table-column prop="dw" label="单位" width="150"> </el-table-column>
            <el-table-column prop="ck" label="仓库" width="150"> </el-table-column>
            <el-table-column prop="quantity" label="数量" width="150"> </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {api} from '@/global/api'
  import Vue from 'vue'
  export default {
    data() {
      return {
        value1:'',
        input:'',
        IntableList: null,
      }
    },
    mounted() {
      var vm = this;
      vm.getData();
    },
    methods: {
      getData () {
        this.$http.get(api.kfData).then(function (response) {
          console.log(response)
          console.log('这是我们需要的json数据', response.data.IntableData)
          this.IntableList = response.data.IntableData;
        }, function (response) {
          alert('请求失败了')
        })
      },
    }
  }
</script>
<style>

  .inContainer{
    float: left;
    width: 1200px;
    position: relative;
    overflow: hidden;
  }
  .inbox{
    padding: 20px 24px;
  }
  .inbox .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: white;
    background-clip: padding-box;
  }

</style>
