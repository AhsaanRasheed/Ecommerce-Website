<template>
  <Header />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue';

export default{
  components: {
    Header
  }
}
</script>


<style>
*{
  margin: 0%;
  padding: 0%;
}

</style>