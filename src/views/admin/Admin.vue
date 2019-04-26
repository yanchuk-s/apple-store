<template>
  <div>
    ADMIN
    <router-link to="/admin">Home</router-link>
    <router-link to="/admin/products">Products</router-link>
    <router-link to="/admin/addproduct">Add product</router-link>
    <div>
      <transition name="page" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin'
}
</script>

<style lang="scss">
.page-enter-active, .page-leave-active {
  transition: opacity .6s, transform .6s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
