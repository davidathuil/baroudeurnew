<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Poster from '@/components/Poster.vue'

export default {
  name: 'Poster',
  components: {
    Poster
  }
}
</script>
