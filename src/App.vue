<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  min-width: $min-width;
  min-height: $min-height;
  background: #f0f0f0;
}
</style>
