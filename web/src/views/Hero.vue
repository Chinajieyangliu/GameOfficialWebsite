<template>
  <div class="hero-page" v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <!-- 王者荣耀精灵图 -->
      <img class="m-1" src="../uploads/logo.png" alt="" height="30" />
      <div class="px-2 flex-1 text-white">
        <span class="mr-3">王者荣耀</span>
        <span>攻略站</span>
      </div>
      <router-link class="text-white" to="/" tag="div">更多英雄 &gt;</router-link>
    </div>
    <!-- 英雄图片展示 -->
    <div class="top" :style="{ 'background-image': `url(${model.banner})` }">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div class="fs-sm">{{ model.title }}</div>
        <h2 class="my-2">{{ model.name }}</h2>
        <div class="fs-xs">
          {{
            model.categories
              .map((v) => {
                return v.name
              })
              .join('/')
          }}
        </div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{ model.scores.difficult }}</span>
            <span>技能</span>
            <span class="badge bg-info">{{ model.scores.skills }}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{ model.scores.attack }}</span>
            <span>生存</span>
            <span class="badge bg-green">{{ model.scores.survive }}</span>
          </div>
          <router-link to="/" tag="span" class="text-grey fs-sm"> 皮肤: 2 &gt;</router-link>
        </div>
      </div>
    </div>
    <!-- 英雄初识和英雄进阶攻略样式 -->
    <div class="px-3 bg-white">
      <div class="nav pt-3 pb-2 d-flex jc-around border-bottom">
        <div class="nav-item active">英雄初识</div>
        <div class="nav-item">进阶攻略</div>
      </div>
    </div>
    <!-- 英雄视频样式 -->
    <swiper>
      <!-- 英雄介绍和一图识英雄 -->
      <swiper-slide>
        <div class="bg-white border-bottom p-3">
          <div class="d-flex flex-around">
            <router-link class="btn btn-lg flex-1" tag="button" to="/">
              <i class="iconfont icon-news"></i>
              英雄介绍视频
            </router-link>
            <router-link class="btn btn-lg ml-2 flex-1" tag="button" to="/">
              <i class="iconfont icon-news"></i>
              一图识英雄
            </router-link>
          </div>
          <div class="skills bg-white mt-4">
            <div class="d-flex jc-around">
              <img class="icon" @click="currentSkillsIndex = i" :class="{ active: currentSkillsIndex === i }" :src="item.icon" v-for="(item, i) in model.skills" :key="item.name" />
            </div>
          </div>
          <!-- 英雄技能介绍 -->
          <div class="d-flex pt-4 pb-2 ai-center">
            <h3 style="margin: 0">{{ currentSkills.name }}</h3>
            <span class="text-grey-1 pl-3 fs-xxs">{{ `(冷取值 :${currentSkills.delay} 消耗 :${currentSkills.cost})` }}</span>
          </div>
          <!-- 英雄技能正式介绍 -->
          <div>
            <p class="mt-3 mb-0">{{ currentSkills.description }}</p>
          </div>
        </div>
        <!-- 使用封装的属性来定义 -->
        <m-card plain icon="news" title="出装推荐">
          <div class="fs-lg">顺风出装</div>
          <div class="d-flex jc-around border-bottom">
            <div v-for="(item, i) in model.items1" :key="i">
              <img class="heroesicon mt-2 mb-1" :src="item.icon" />
              <div class="fs-xs pb-1">{{ item.name }}</div>
            </div>
          </div>
          <div class="fs-lg pt-3">逆风出装</div>
          <div class="d-flex jc-around">
            <div v-for="(item, i) in model.items2" :key="i">
              <img class="heroesicon mt-2" :src="item.icon" />
              <div class="fs-xs pb-1">{{ item.name }}</div>
            </div>
          </div>
        </m-card>

        <m-card plain icon="news" title="团战思路">
          <p class="m-0">{{ model.usageTips }}</p>
        </m-card>
        <m-card plain icon="news" title="使用技巧">
          <p class="m-0">{{ model.battleTips }}</p>
        </m-card>
        <m-card plain icon="news" title="对抗技巧">
          <p class="m-0">{{ model.teamTips }}</p>
        </m-card>
        <m-card plain icon="news" title="英雄关系">
          <div class="fs-lg">最佳搭档</div>
          <div class="pt-3 d-flex" v-for="item in model.partners" :key="item.name">
            <img :src="item.hero.avatar" style="height: 50px; width: 50px" />
            <div class="fs-xs ml-3">{{ item.description }}</div>
          </div>
          <div class="border-bottom mt-3"></div>
          <div class="mt-2">
            <div class="fs-lg">被克关系</div>
            <div class="pt-3 d-flex" v-for="item in model.battleHeros" :key="item.name">
              <img :src="item.hero.avatar" style="height: 50px; width: 50px" />
              <div class="fs-xs ml-3">{{ item.description }}</div>
            </div>
            <div class="border-bottom mt-3"></div>
          </div>
        </m-card>
      </swiper-slide>
      <swiper-slide></swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      model: null,
      currentSkillsIndex: 0
    }
  },
  computed: {
    currentSkills() {
      return this.model.skills[this.currentSkillsIndex]
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http(`/heroes/${this.id}`)
      this.model = res.data
      console.log(this.model)
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style lang="scss">
@import '../style/variables';
.hero-page {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
}
.info {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  .badge {
    margin: 0 0.25rem;
    display: inline-block;
    font-size: 0.6rem;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}
img.icon {
  width: 60px;
  height: 60px;
  border: 3px solid map-get($map: $colors, $key: 'white');
  border-radius: 50%;
  &.active {
    border-color: map-get($map: $colors, $key: 'primary');
  }
}
img.heroesicon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
}
</style>
