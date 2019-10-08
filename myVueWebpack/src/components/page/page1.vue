<template>
<div>
    <router-link to="/page1/" >Card1</router-link>
    <router-link to="/page1/card2" >Card2</router-link>
    <router-link to="/page1/card3" >Card3</router-link>
  <div class="card" style="width: 18rem;">
        <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: '',
//   data () {
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
