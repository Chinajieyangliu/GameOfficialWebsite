<template>
  <div>
    <m-card :title="title" :icon="icon">
      <div class="nav jc-between">
        <div class="nav-item" v-for="(item, i) in categories" :key="i" @click="$refs.list.swiper.slideTo(i)" :class="{ active: active === i }">
          <div class="nav-link">{{ item.name }}</div>
        </div>
      </div>
      <!-- 新闻资讯轮播图样式 -->

      <div class="pt-2">
        <swiper
          ref="list"
          :options="{ autoHeight: true }"
          @slide-change="
            () => {
              active = $refs.list.swiper.realIndex
            }
          "
        >
          <swiper-slide v-for="(category, i) in categories" :key="i">
            <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
