<template>
  <div class="page-article" v-if="this.model">
    <div class="d-flex py-3 mx-2 border-bottom">
      <i class="iconfont icon-fenxiang pr-2 icon-size text-blue"></i>
      <div class="flex-1 text-blue">{{ model.title }}</div>
      <div class="text-grey">2023-07-05</div>
    </div>
    <div v-html="model.body" class="mx-4 article-body"></div>
    <div class="px-3 border-top pt-4 pb-3">
      <div class="de-flex ai-center">
        <i class="iconfont icon-fenxiang"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
    </div>
    <!-- 相关文章 -->
    <router-link tag="div" v-for="item in model.related" :key="item._id" :to="`articles/${id}`" class="py-2 mx-4">{{ item.title }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: null
    }
  },
  created() {
    this.fetch()
  },
  watch: {
    id: 'fetch'
  },
  props: {
    id: {
      required: true
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  }
}
</script>

<style lang="scss">
.icon-size {
  font-size: 17.9998px;
}
.article-body {
  h1 {
    padding-left: 0.7692rem;
    width: 100%;
    height: 33.0005px;
    line-height: 33.0005px;
    font-size: 13.9997px;
    color: #caf2ff;
    background-color: #115e95;
  }
  img {
    width: 100%;
    height: auto;
  }
  h3 {
    img {
      width: 3.3077rem;
      height: 3.3077rem;
    }
  }
}
</style>
