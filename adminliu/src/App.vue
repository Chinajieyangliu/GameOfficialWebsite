<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      property: 'value'
    }
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
