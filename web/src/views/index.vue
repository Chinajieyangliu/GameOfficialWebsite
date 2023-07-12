<template>
  <div>
    <!-- 幻灯片开始 -->
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../uploads/index1.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../uploads/index2.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../uploads/index3.jpeg" alt="" />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- 幻灯片结束 -->
    <!-- 特殊服务开始 -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="item in 10" :key="item">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- 特殊服务结束 -->

    <!-- 新闻资讯项开始 -->
    <m-card-list title="新闻资讯" icon="cc-menu-circle" :categories="newCats">
      <template #items="{ category }">
        <router-link tag="div" :to="`/article/${news._id}`" class="py-2 fs-xs d-flex" v-for="(news, i) in category.newsList" :key="i">
          <span class="text-info">[{{ news.categoryName }}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{ news.title }}</span>
          <span class="text-grey-1 fs-sm">{{ news.createdAt | shortDate }}</span>
        </router-link>
      </template>
    </m-card-list>
    <!-- 常见的卡片式布局 -->

    <!-- 新闻资讯项结束 -->

    <m-card-list title="英雄列表" icon="card-hero" :categories="heroCats">
      <template #items="{ category }">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link tag="div" :to="`heroes/${hero._id}`" class="p-2 text-center" style="width: 20%" v-for="(hero, i) in category.heroesList" :key="i">
            <img :src="hero.avatar" class="w-100" />
            <div>{{ hero.name }}</div>
          </router-link>
        </div>
      </template>
    </m-card-list>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    shortDate(val) {
      return dayjs(val).format('MM / DD')
    }
  },

  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.pagination-home'
        }
      },
      newCats: [],
      heroCats: []
    }
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newCats = res.data
    },
    async fetchHeroCats() {
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    }
  },
  created() {
    this.fetchNewsCats()
    this.fetchHeroCats()
  }
}
</script>

<style lang="scss">
// 幻灯片样式
@import '../style/variables';
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, 'white');
    &.swiper-pagination-bullet-active {
      background: map-get($colors, 'info');
    }
  }
}
// 精灵图样式
.nav-icons {
  border-top: 1px solid $boder-color;
  border-bottom: 1px solid $boder-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $boder-color;
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
</style>
