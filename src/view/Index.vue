<template>
  <div class="index">
    <st-header></st-header>
    <div class="index-con"></div>
  </div>
</template>
<script>
import StHeader from '@/components/st-header';
export default {
  name: 'Index',
  data () {
    return {}
  },
  components: {
    StHeader
  }
}
</script>
<style lang="scss" scoped>
.index{
  width: 100%;

}
.index-con{
  width: 100%;
  padding-top: 100px;
}
</style>
