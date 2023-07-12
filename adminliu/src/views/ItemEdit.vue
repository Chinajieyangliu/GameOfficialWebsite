<template>
  <div class="about">
    <!-- 通过路由传来的props值判断是新建数据还是修改数据 -->
    <h1>{{ id ? '修改' : '新建' }}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="装备名">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="上传图标">
        <!-- action 文件上传服务端地址 on-success 当上传文件成功后做的事情 -->
        <el-upload class="avatar-uploader" :headers="getAuthHeaders()" :action="$http.defaults.baseURL + '/uploads'" :show-file-list="false" :on-success="afterUpdate">
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
    // 当前端上传文件成功后的操作
    afterUpdate(res) {
      // res是服务端响应的数据，里面有保存着服务端图片存放的地址
      this.$set(this.model, 'icon', res.url)
    },
    async save() {
      // 保存时，需要判断是否是新创建的数据，如果是就创建。如果不是就修改
      let res
      if (this.id) {
        res = this.$http.put(`/rest/item/${this.id}`, this.model)
      } else {
        res = await this.$http.post('/rest/item', this.model)
      }
      this.$router.push('/items/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const item = await this.$http.get(`/rest/item/${this.id}`)
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
