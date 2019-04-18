<template>
  <div id="app">
    <Header/>
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
#app {
  font-family: 'Montserrat', sans-serif!important;
  min-height: 100%;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
}
.page-enter-active, .page-leave-active {
  transition: opacity .6s, transform .6s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
