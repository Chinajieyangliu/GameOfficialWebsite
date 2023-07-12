<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <!-- 王者荣耀精灵图 -->
      <img class="m-1" src="../uploads/logo.png" alt="" height="30" />
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="fs-xxs text-grey-1">团队成就更多</div>
      </div>
      <button class="btn bg-primary" type="button">点击下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav d-flex jc-around nav-inverse">
        <div class="nav-item active">
          <router-link class="nav-link" to="/" tag="div">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/" tag="div">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/" tag="div">赛事中心</router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.topbar {
  top: 0;
  position: sticky;
  z-index: 999;
}
</style>
