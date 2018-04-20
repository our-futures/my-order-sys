<template>
  <div class="customerInfo">
<!-- 客户管理 -->

<div class="cum_search">
     <el-select v-model="value" placeholder="请选择客户类型">
       <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

  <div class="ads">
    <el-input v-model="input" placeholder="请输入客户编号名称/联系人/电话查询" ></el-input>
    <el-button class="filter-item" type="primary" v-waves icon="search" @click="handleSearch" size="small">搜索</el-button>
  </div>

</div>

<!-- 新增按钮  -->
    <div class="top-distance">
      <el-button type="primary"  icon="edit" @click="handleCreate">新增</el-button>
    </div>
  <div class="add_btn">
         <el-dialog title="客户信息" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="客户类型" :label-width="formLabelWidth">
                <el-select v-model="form.type" placeholder="请选择客户类型">
                  <el-option label="零售客户" value="零售客户"></el-option>
                  <el-option label="多售客户" value="多售客户"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="客户等级" :label-width="formLabelWidth">
                  <el-input v-model="form.level" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="客户编号" :label-width="formLabelWidth">
                  <el-input v-model="form.id" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="客户名称" :label-width="formLabelWidth">
                  <el-input v-model="form.title" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系人" :label-width="formLabelWidth">
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机" :label-width="formLabelWidth">
                  <el-input v-model="form.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="QQ/微信/Email" :label-width="formLabelWidth">
                  <el-input v-model="form.chat" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="送货地址" :label-width="formLabelWidth">
                  <el-input v-model="form.address" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
         <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleCreateSubmit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
    <!-- 编辑按钮  -->
    <div class="edit_btn">
      <el-dialog title="客户信息" :visible.sync="dialogedFormVisible">
        <el-form :model="editForm">
          <el-form-item label="客户类型" :label-width="formLabelWidth">
            <el-select v-model="editForm.type" placeholder="请选择客户类型">
              <el-option label="零售客户" value="零售客户"></el-option>
              <el-option label="多售客户" value="多售客户"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="客户等级" :label-width="formLabelWidth">
            <el-input v-model="editForm.level" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="客户编号" :label-width="formLabelWidth">
            <el-input v-model="editForm.id" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="客户名称" :label-width="formLabelWidth">
            <el-input v-model="editForm.title" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系人" :label-width="formLabelWidth">
            <el-input v-model="editForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机" :label-width="formLabelWidth">
            <el-input v-model="editForm.phone" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="QQ/微信/Email" :label-width="formLabelWidth">
            <el-input v-model="editForm.chat" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="送货地址" :label-width="formLabelWidth">
            <el-input v-model="editForm.address" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogedFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handledoneEdit()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
<!-- 客户信息表格 -->
 <div class="cum_table"style="width:100%;border:none;">
    <el-table
    ref="multipleTable"
    :data="tableData3"
    border
    tooltip-effect="dark"
    style="..."
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        prop="type"
        label="客户类型"
        width="100" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="level"
        label="客户等级"
        width="80">
      </el-table-column>
      <el-table-column
        prop="id"
        label="客户编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="title"
        label="客户名称"
        width="140">
      </el-table-column>
      <el-table-column
        prop="name"
        label="联系人"
        width="110" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机"
        width="120">
      </el-table-column>
      <el-table-column
        prop="chat"
        label="QQ/微信/Email"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="送货地址"
        width="150" show-overflow-tooltip>
      </el-table-column>
      <el-table-column align="center"  label="操作" width="150">
        <template scope="scope">
          <el-button class="edit" size="small" v-waves @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button class="delete" size="small" type = "danger"  v-waves   @click="handdeleteRow(scope.$index, tableData3)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>


<script>
  export default {
      data () {
          return {
           options: [{
          value: '1',
          label: '普通用户'
          }, {
          value: '2',
          label: 'VIP用户'
        }],
          value: '', //选中的值
          input: '', //搜索框输入值
          checked: false,
           tableData3: [{
              type: '零售客户',
              level: '普通',
              id: '21062564789',
              title: '广州喜洋洋有限公司',
              name: '杨玉环',
              phone: '16598742351',
              chat: '1032658897',
              address: '河北省石家庄市桥西区东湖街道',
          },{
              type: '多售客户',
              level: 'VIP',
              id: '244452564789',
              title: '阳江哇哈哈有限公司',
              name: '方世玉',
              phone: '18956562351',
              chat: '4278538897',
              address: '广东省湛江市赤坎区寸金街道',
          },{
              type: '零售客户',
              level: 'VIP',
              id: '555552564789',
              title: '阳西喜之郎有限公司',
              name: '西施',
              phone: '13456562351',
              chat: '4678533333',
              address: '广东省阳江市阳西县',
          }],
          multipleSelection: [],
            value2: '',
            dialogFormVisible: false,
            dialogedFormVisible:false,
            form: {
              type: '',
              level: '',
              id: '',
              title: '',
              name: '',
              phone: '',
              chat: '',
              address: '',
            },
            editForm: {
              type: '',
              level: '',
              id: '',
              title: '',
              name: '',
              phone: '',
              chat: '',
              address: '',
            },
            formLabelWidth: '120px'
          }
        },
         methods: {
            handleSelectionChange(val) {
              this.multipleSelection = val;
            },
            //重置新增表单
            initForm(){
              let vm = this;
              vm.form = {
                type: '',
                level: '',
                id: '',
                title: '',
                name: '',
                phone: '',
                chat: '',
                address: '',
              }
            },
            // 新增按钮
            handleCreate(){
            //每次新增时，重置新增表单数据，避免双向绑定影响
              this.initForm();
              this.dialogFormVisible = true;
            },
            // 新增功能
            handleCreateSubmit(){
              var vm = this ;
              console.log('新增的信息:',vm.form);
              vm.tableData3.push(vm.form);
              console.log('新增后的信息数据:',vm.tableData3);
              this.dialogFormVisible = false;
              // 提交后弹出成功提示语
              this.$message({
                showClose: true,
                message: '提交成功！',
                type: 'success'
              });
            },
           // 删除单条
           handdeleteRow(index, rows) {
             rows.splice(index, 1);
           },
           //搜索
           handleSearch () {
             var vm = this;
             vm.$message({
               showClose: true,
               message: '搜索信息：客户类型：' + vm.value + ' ;  输入参数：' + vm.input,
               type: 'success'
             });
           },
           // 编辑功能
           handleEdit(index, row) {
             this.dialogedFormVisible = true;
             this.editForm = row;  //表示赋值、引用（浅拷贝）指向同一内存地址
             this.editIndex = index;
           },
           //编辑中的提交
           handledoneEdit(){
             console.log(this.editIndex);
             console.log(this.editForm);
             var vm = this ;
             vm.tableData3[this.editIndex] = this.editForm;
             this.dialogedFormVisible = false ;//设置false为不可见
             // 提交后弹出成功提示语
             this.$message({
               showClose: true,
               message: '提交成功！',
               type: 'success'
             });
           },

          }

   }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  /*客户管理*/
 .customerInfo{
    position: absolute;
    /*background:#FEF5E7;*/
    width: 1176px;
  }
  /*查询*/
  .customerInfo .cum_search{
    margin-left: 20px;
  }
  .customerInfo .wrapper span{
    color:#fff;
  }
  .customerInfo .ads
  {
    display: inline;
  }
  .customerInfo .ads .el-input{
    width: 22%;
    margin-right: 26px
  }

  /*客户信息表格*/
  .customerInfo .cum_table .el-button{
    /* background: #dfe6ec; */
  }
  .customerInfo .add_btn{
    float: right;
    margin-bottom: 10px;
  }
  .customerInfo .tab_btn .el-button{
    background: #fff;
    margin-left: 20px;
  }

   .top-distance {
    margin: 15px;
  }
</style>
