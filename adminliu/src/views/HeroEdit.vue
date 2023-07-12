<template>
  <div class="about">
    <!-- 通过路由传来的props值判断是新建数据还是修改数据 -->
    <h1>{{ id ? '修改' : '新建' }}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs type="border-card" value="message">
        <el-tab-pane label="基础信息" name="message">
          <el-form-item label="英雄">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="图标">
            <!-- action 文件上传服务端地址 on-success 当上传文件成功后做的事情 -->
            <el-upload class="avatar-uploader" :headers="getAuthHeaders()" :action="$http.defaults.baseURL + '/uploads'" :show-file-list="false" :on-success="afterUpdate">
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <!-- 上传背景图片 -->
          <el-form-item label="背景图片">
            <el-upload class="avatar-uploader" :headers="getAuthHeaders()" :action="$http.defaults.baseURL + '/uploads'" :show-file-list="false" :on-success="(res) => $set(model, 'banner', res.url)">
              <img style="width: 300px; height: auto" v-if="model.banner" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <!-- 用户类型的选择 -->
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option v-for="item of categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <!-- 英雄上手难度 -->
          <el-form-item label="难度">
            <el-rate style="margin-top: 0.68rem" :max="9" show-score v-model="model.scores.difficult"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate style="margin-top: 0.68rem" :max="9" show-score v-model="model.scores.skills"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate style="margin-top: 0.68rem" :max="9" show-score v-model="model.scores.attack"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate style="margin-top: 0.68rem" :max="9" show-score v-model="model.scores.survive"></el-rate>
          </el-form-item>
          <!-- 英雄出装 -->
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option v-for="item of items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option v-for="item of items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <!-- 英雄使用技巧  -->
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战技巧">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <!-- 英雄技能介绍 -->
        <el-tab-pane label="技能" name="skills">
          <el-button @click="model.skills.push({})"> <i class="el-icon-plus"></i> 添加技能</el-button>
          <!-- 点击添加图标会添加数据框供数据 -->
          <el-row type="flex;" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item, i) in model.skills" :key="i">
              <!-- 添加英雄名称 -->
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <!-- 添加英雄冷却 -->
              <el-form-item label="冷却">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>
              <!-- 添加英雄蓝量消耗 -->
              <el-form-item label="蓝量">
                <el-input v-model="item.cost"></el-input>
              </el-form-item>
              <!-- 添加英雄头像 -->
              <el-form-item label="头像">
                <el-upload
                  class="avatar-uploader"
                  :headers="getAuthHeaders()"
                  :action="$http.defaults.baseURL + '/uploads'"
                  :show-file-list="false"
                  :on-success="
                    (res) => {
                      $set(item, 'icon', res.url)
                    }
                  "
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <!-- 添加英雄描述 -->
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <!-- 添加英雄小提示 -->
              <el-form-item label="提示">
                <el-input v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.skills.splice(i, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!-- 英雄可以搭配的搭档 -->
        <el-tab-pane label="搭档英雄" name="partners">
          <el-button @click="model.partners.push({})"> <i class="el-icon-plus"></i> 添加搭档英雄</el-button>

          <!-- 点击添加图标会添加数据框供数据 -->
          <el-row type="flex;" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item, i) in model.partners" :key="i">
              <!-- 在hero库中选择英雄 -->
              <el-form-item label="描述" style="padding-top: 10px">
                <el-select filterable v-model="item.hero">
                  <el-option v-for="hero in heroes" :key="hero._id" :value="hero._id" :label="hero.name"> </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.partners.splice(i, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="克制英雄" name="battleHeros">
          <el-button @click="model.battleHeros.push({})"> <i class="el-icon-plus"></i> 添加克制英雄</el-button>
          <!-- 点击添加图标会添加数据框供数据 -->
          <el-row type="flex;" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item, i) in model.battleHeros" :key="i">
              <!-- 在hero库中选择英雄 -->
              <el-form-item label="描述" style="padding-top: 10px">
                <el-select filterable v-model="item.hero">
                  <el-option v-for="hero in heroes" :key="hero._id" :value="hero._id" :label="hero.name"> </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.battleHeros.splice(i, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button type="primary" native-type="submit" style="margin-top: 1rem">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      categories: [],
      heroes: [],
      model: {
        name: '',
        avatar: '',
        scores: {},
        skills: [],
        partners: [],
        battleHeros: []
      }
    }
  },
  created() {
    // 向服务器请求关联英雄数据值
    this.fetchCategories()
    // 初始化向服务器请求英雄相关的item数据
    this.fetchItems()
    // 初始化获取英雄数据
    this.fetchHeros()
    // 当用户需要编辑时，获取用户信息
    this.id && this.fetch()
  },
  methods: {
    // 当前端上传文件成功后的操作
    afterUpdate(res) {
      this.model.avatar = res.url
    },
    async save() {
      // 保存时，需要判断是否是新创建的数据，如果是就创建。如果不是就修改
      let res
      if (this.id) {
        res = this.$http.put(`/rest/hero/${this.id}`, this.model)
      } else {
        res = await this.$http.post('/rest/hero', this.model)
      }
      this.$router.push('/heros/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const item = await this.$http.get(`/rest/hero/${this.id}`)
      this.model = Object.assign({}, this.model, item.data)
    },
    async fetchCategories() {
      const items = await this.$http.get('/rest/categories')
      this.categories = items.data
    },
    async fetchItems() {
      const res = await this.$http.get('/rest/item')
      this.items = res.data
    },
    async fetchHeros() {
      const res = await this.$http.get('/rest/hero')
      this.heroes = res.data
    }
  },
  // 获取数据库中所有的一级分数据

  props: {
    id: {}
  }
}
</script>

<style></style>
