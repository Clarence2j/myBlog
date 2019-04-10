<template>
  <div class="not-found">
    <img src="./../../static/img/fly404.jpg" alt="">
  </div>
</template>
<script>
export default {
  name: 'NotFound',
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.not-found{
  width: 100%;
  height: 100%;
  @include display-flex;
  @include justify-content-center;
  @include align-items-center;
}
</style>
