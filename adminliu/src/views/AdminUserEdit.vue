<template>
  <div class="about">
    <!-- 通过路由传来的props值判断是新建数据还是修改数据 -->
    <h1>{{ id ? '编辑' : '新建' }}管理员</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="账号">
        <el-input v-model="model.username"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input type="text" v-model="model.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  created() {
    // 当用户需要编辑时，获取用户信息
    this.id && this.fetch()
  },
  methods: {
    async save() {
      // 保存时，需要判断是否是新创建的数据，如果是就创建。如果不是就修改
      let res
      if (this.id) {
        res = this.$http.put(`/rest/adminuser/${this.id}`, this.model)
      } else {
        res = await this.$http.post('/rest/adminuser', this.model)
      }
      this.$router.push('/admin_users/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const item = await this.$http.get(`/rest/adminuser/${this.id}`)
      this.model = item.data
    }
  },
  // 获取数据库中所有的一级分数据

  props: {
    id: {}
  }
}
</script>

<style></style>
