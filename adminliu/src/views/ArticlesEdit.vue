<template>
  <div class="about">
    <!-- 通过路由传来的props值判断是新建数据还是修改数据 -->
    <h1>{{ id ? '修改' : '新建' }}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <!-- :key是关键子必须写 ：label是每个下拉选框的名称 :value是下拉选框的真实对应值， -->
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>

      <el-form-item label="详情">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></vue-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  data() {
    return {
      model: {},
      categories: []
    }
  },
  created() {
    this.fetchCategories()
    // 当用户需要编辑时，获取用户信息
    this.id && this.fetch()
  },
  components: {
    VueEditor
  },
  methods: {
    async save() {
      // 保存时，需要判断是否是新创建的数据，如果是就创建。如果不是就修改
      let res
      if (this.id) {
        res = this.$http.put(`/rest/article/${this.id}`, this.model)
      } else {
        res = await this.$http.post('/rest/article', this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const item = await this.$http.get(`/rest/article/${this.id}`)
      this.model = item.data
    },
    async fetchCategories() {
      const item = await this.$http.get('/rest/categories')
      this.categories = item.data
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      formData.append('file', file)
      const res = await this.$http.post('uploads', formData)
      Editor.insertEmbed(cursorLocation, 'image', res.data.url)
      resetUploader()
    }
  },
  // 获取数据库中所有的一级分数据

  props: {
    id: {}
  }
}
</script>

<style></style>
