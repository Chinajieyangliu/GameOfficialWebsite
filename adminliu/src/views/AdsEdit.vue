<template>
  <div class="about">
    <!-- 通过路由传来的props值判断是新建数据还是修改数据 -->
    <h1>{{ id ? '修改' : '新建' }}广告</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="添加广吿名">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="添加广吿名">
        <el-button @click="model.items.push({})"> <i class="el-icon-plus"></i> 添加广告</el-button>
        <!-- 点击添加图标会添加数据框供天数据 -->
        <el-row type="flex;" style="flex-wrap: wrap">
          <el-col :md="16" v-for="(item, i) in model.items" :key="i">
            <!-- 添加英雄名称 -->
            <el-form-item label="广告(Url}">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <!-- 添加英雄头像 -->
            <el-form-item label="图片" style="margin-top: 0.6rem">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/uploads'"
                :headers="getAuthHeaders()"
                :show-file-list="false"
                :on-success="
                  (res) => {
                    $set(item, 'image', res.url)
                  }
                "
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-button size="small" type="danger" @click="model.items.splice(i, 1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
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
      model: {
        items: []
      }
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
        res = this.$http.put(`/rest/advertisement/${this.id}`, this.model)
      } else {
        res = await this.$http.post('/rest/advertisement', this.model)
      }
      this.$router.push('/ads/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get(`/rest/advertisement/${this.id}`)
      this.model = Object.assign({}, this.model, res.data)
    }
  },
  // 获取数据库中所有的一级分数据

  props: {
    id: {}
  }
}
</script>

<style></style>
