<template>
  <!-- 常见的卡片式布局 -->
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex ai-cente" :class="[{ 'border-bottom': !plain }, { 'pb-4': !plain }]">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{ title }}</div>
      <i class="iconfont icon-menu" v-show="!plain"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    plain: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
@import '../style/variables';
</style>
