<template>
  <div class="hello">
    <h1>Mirror, mirror, tell me, who is the most handsome man in the world？</h1>
    <h1>{{  resultMsg }}</h1>
    <div style="width:100%;overflow:hidden;">
      <img src="./../assets/logo.png" alt="" style="float:left;">
      <p style="float:left;overflow-wrap: break-word;width: 80%">
        dfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdffdfdfdfdfdfdffdfdfdfdfdfdfdff
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      resultMsg: ''
    }
  },
  created () {
    // this.srv.apiGetResult()
    //   .then(res => {
    //     console.log(res)
    //     if(res.code == 1000){
    //       this.resultMsg = res.data.aaa
    //     }
    //   })
    this.srv.apiPostResult({
      time: '2019'
    })
      .then(res => {
        console.log(res)
        if(res.code == 1000){
          }
          this.resultMsg = res.data.who
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
