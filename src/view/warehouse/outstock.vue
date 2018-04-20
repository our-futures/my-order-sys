<template>
  <div class="inContainer">
    <div class="inbox">
      <div class="con-header">
        <el-form>
          <el-form-item label="">
            <el-input v-model="input" placeholder="请输入商品编号" ></el-input>
          </el-form-item>
          <el-button class="filter-item" type="primary" v-waves icon="search" @click="handleSearch" size="small">搜索</el-button>
        </el-form>
      </div>
      <el-button type="primary" @click="handleCreate"  icon="edit">添加</el-button>
      <div  class="top-distance">
      </div>
      <div class="grid">
        <div class="layoutitem" style="width:100%;border:none;">
          <el-table :data="IntableList" border style="width: 100%"  :default-sort = "{prop: 'ID', order: 'ascending'}">
            <el-table-column prop="number" label="编号" width="110"></el-table-column>
            <el-table-column prop="ID" label="ID" width="110" sortable> </el-table-column>
            <el-table-column prop="spbh" label="商品编号" width="110"> </el-table-column>
            <el-table-column prop="name" label="商品名称" width="110"> </el-table-column>
            <el-table-column prop="dw" label="单位" width="110"> </el-table-column>
            <el-table-column prop="ck" label="仓库" width="110"> </el-table-column>
            <el-table-column prop="quantity" label="数量" width="110"> </el-table-column>
            <el-table-column prop="rkdj" label="出库单价" width="110"> </el-table-column>
            <el-table-column prop="rkje" label="出库金额" width="110"> </el-table-column>
            <el-table-column align="center"  label="操作" width="150">
              <template scope="scope">
                <el-button class="edit" size="small" v-waves  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button class="delete" size="small" type = "danger"  v-waves   @click="handdeleteRow(scope.$index, IntableList)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <el-dialog title="添加基本信息" :visible.sync="dialogCreatVisible">
        <el-form class="small-space" :model="temp" label-position="right" label-width="70px" style='width: 400px; margin-left:50px;'>

          <el-form-item label="编号">
            <el-input v-model="temp.number"></el-input>
          </el-form-item>

          <el-form-item label="ID">
            <el-input v-model="temp.ID"></el-input>
          </el-form-item>

          <el-form-item label="商品编号">
            <el-input v-model="temp.spbh"></el-input>
          </el-form-item>

          <el-form-item label="商品名称">
            <el-input v-model="temp.name"></el-input>
          </el-form-item>
          <el-form-item label="单位">
            <el-input v-model="temp.dw"></el-input>
          </el-form-item>

          <el-form-item label="仓库">
            <el-input v-model="temp.ck"></el-input>
          </el-form-item>
          <el-form-item label="数量">
            <el-input v-model="temp.quantity"></el-input>
          </el-form-item>
          <el-form-item label="出库单价">
            <el-input v-model="temp.rkdj"></el-input>
          </el-form-item>
          <el-form-item label="出库金额">
            <el-input v-model="temp.rkje"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogCreatVisible = false">取 消</el-button>

          <el-button type="primary" @click="handleCreateSubmit">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog title="编辑信息" :visible.sync="dialogEditVisible">
        <el-form class="small-space" :model="temp" label-position="right" label-width="70px" style='width: 400px; margin-left:50px;' >

          <el-form-item label="编号">
            <el-input v-model="temp.number"></el-input>
          </el-form-item>

          <el-form-item label="ID">
            <el-input v-model="temp.ID"></el-input>
          </el-form-item>

          <el-form-item label="商品编号">
            <el-input v-model="temp.spbh"></el-input>
          </el-form-item>

          <el-form-item label="商品名称">
            <el-input v-model="temp.name"></el-input>
          </el-form-item>
          <el-form-item label="单位">
            <el-input v-model="temp.dw"></el-input>
          </el-form-item>

          <el-form-item label="仓库">
            <el-input v-model="temp.ck"></el-input>
          </el-form-item>
          <el-form-item label="数量">
            <el-input v-model="temp.quantity"></el-input>
          </el-form-item>
          <el-form-item label="出库单价">
            <el-input v-model="temp.rkdj"></el-input>
          </el-form-item>
          <el-form-item label="出库金额">
            <el-input v-model="temp.rkje"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogEditVisible = false">取 消</el-button>

          <el-button type="primary" @click="handleEditSubmit">确 定</el-button>
        </div>
      </el-dialog>
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
        dialogCreatVisible: false,
        dialogEditVisible: false,
        isShow:false,
        checkList: [],
        IntableList: null,
        temp: {
          "number":"" ,
          "ID": "",
          "spbh":"" ,
          "name":"",
          "dw":"",
          "ck":"",
          "quantity":"",
          "rkdj":"",
          "rkje":"",
        }
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
      handleCreate() {
        this.dialogCreatVisible = true;
      },
      handleEdit(index,row){
        this.dialogEditVisible = true;
        this.temp = row;  //表示赋值、引用（浅拷贝）指向同一内存地址
        this.editIndex = index;
      },
      //新增提交
      handleCreateSubmit(){
        var vm = this;
        var flag=0;
        for(var intablelist of vm.IntableList){
          console.log('进入循环flag',flag)
          if(vm.temp.ID!=intablelist.ID){
            console.log('不相等的时候ID',intablelist.ID)
            flag++;
          }
        }
        console.log("退出if后flag",flag)
        if(flag==vm.IntableList.length){
          vm.IntableList.push(vm.temp);
          vm.temp=JSON.parse(JSON.stringify(vm.temp));
        }
        else{
          alert('ID重复了,请重新输入');
        }
        this.dialogCreatVisible = false;
      },
      //编辑提交
      handleEditSubmit(){
        console.log(this.editIndex);
        console.log(this.temp);
        var vm = this ;
        vm.IntableList[this.editIndex] = this.temp;
        this.dialogEditVisible = false;//设置false为不可见
        // 提交后弹出成功提示语
        this.$message({
          showClose: true,
          message: '提交成功！',
          type: 'success'
        });

      },
      // 删除单条
      handdeleteRow(index, rows) {
        console.log(index)
        rows.splice(index, 1);
      },
      //搜索
      handleSearch () {
        var vm = this;
        vm.$message({
          showClose: true,
          message: '搜索信息： 商品编号：' + vm.input,
          type: 'success'
        });
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
  .con-header {
    width: 100%;
    overflow: hidden;
  }
  .header-rg {
    float: right;
    padding-right: 25px;
    display: block;
  }
  .inbox .el-form-item {
    float: left;
    padding-right: 8px;
  }
  .inbox .el-form-item .el-form-item__content {
    float: left;
  }
  .header-rg .el-input__inner {
    height: 30px;
    width: 120px;
  }
  .inbox .gys-list .layoutgr .el-form-item {
    float: left;
    padding-right: 40px;
    padding-bottom: 5px;
    margin-bottom: 0;
  }
  .layoutgr {
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .inbox .gys-list .layoutgr .el-form-item__label {
    width: inherit;
  }
  .layoutgr .el-input__inner {
    height: 30px;
    width: 120px;
  }
  .cellspacing {
    margin-top: 10px;
  }
  .cell-zd {
    float: left;
    display: inline-block;
  }

  .small-space .el-form-item {
    margin-bottom: 10px;
  }
  .cell-jespan{color: white;}
  .inbox .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: white;
    background-clip: padding-box;
  }
  .inbox .el-input__icon {
    right: 70px;
  }
  .inbox .el-dialog__footer {
    clear: both;
  }
  .top-distance {
    margin: 15px;
  }
</style>
