<template>
  <div class="st-header">
    <div class="header-con">
      <ul class="nav clearfix">
        <li 
          class="fl name-nav-item size-big hand-point" 
          v-for="item in nameNav" 
          :key="item.id"
        >
          {{item.name}}
        </li>
        <li class="fr name-nav-item color-change hand-point show-nav">
          Clarence
          <div class="web-nav">
            <div 
              class="web-nav-item"
              v-for="item in nameNav"
              :key="item.id"
            >
            {{item.nameRd}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StHeader',
  data () {
    return {
      nameNav : [
        {
          name : '修身',
          nameRd : '娱乐',
          path : '/Index',
          id : 0
        },
        {
          name : '齐家',
          nameRd : '生活',
          path : '/Index',
          id : 1
        },
        {
          name : '治国',
          nameRd : '技术',
          path : '/Index',
          id : 2
        },
        {
          name : '平天下',
          nameRd : '旅游',
          path : '/Index',
          id : 3
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.st-header{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
}
.header-con{
  width: $min-width;
  margin: 0 auto;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  // text-transform: uppercase;
}
.name-nav-item{
  // margin: 0 30px;
  width: 100px;
  text-align: center;
  position: relative;
}
.size-big:hover{
  font-size: 18px;
}
.web-nav{
  width: 100px;
  position: absolute;
  padding-bottom: 8px;
  bottom: -148px;
  right: 0;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  display: none;
  background: #000;
  transition: 0.3s all ease;
}
.color-change{
  transition: 0.3s all ease;
}
.color-change:hover{
  color: #ccc;
}
.web-nav-item{
  width: 100px;
  height: 34px;
  font-size: 14px;
  text-align: center;
  line-height: 34px;
  color: #fff;
  border-bottom: 1px solid #000;
}
.web-nav-item:hover{
  font-size: 18px;
}
.color-change:hover .web-nav{
  display: block;
}
</style>
