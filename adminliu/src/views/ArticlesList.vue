<template>
  <div>
    <h1>文章列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <!-- 边框右边编辑删除操作 -->
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/articles/edit/${scope.row._id}`)" type="primary" size="small">编辑</el-button>
          <el-button @click="remove(scope.row)" type="primary" size="small">删除 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  // 页面渲染时获取对应数据
  created() {
    // 初始化时调用该方法
    this.fetch()
  },
  methods: {
    // 初始化页面发送请求，获取到数据渲染页面
    async fetch() {
      const res = await this.$http.get('/rest/article')
      this.items = res.data
    },
    remove(row) {
      this.$confirm(`此操作将永久删除${row.title}, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await this.$http.delete(`/rest/article/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.fetch()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>

<style></style>
