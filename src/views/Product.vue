<template>
  <div class="product-wrp">
    <transition name="fade">
      <div v-if="updateVisible" class="loader-prod">
        <div class="linear-activity">
            <div class="indeterminate"></div>
        </div>
      </div>
    </transition>
    <transition name="page" mode="out-in">
      <div v-if="contentVisible">
        <h1>PRODUCT</h1>
        <h2>{{productItem.title}}</h2>
        <h3>{{productItem.slug}}</h3>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      product: [],
      updateVisible: false,
      contentVisible: true
    }
  },
  created() {
    // let productSlug = this.$route.params.slug
    // this.product = this.$store.getters.getProductBySlug(productSlug)
  },
  computed: {
    productItem() {
      return this.$store.getters.getProductBySlug(this.$route.params.slug)
    }
  },
  beforeRouteUpdate (to, from, next) {
  //  console.log('START')
   this.updateVisible = true
   this.contentVisible = false
   next()
  },
  updated(){
    // console.log('END')
    setTimeout( () => {
      this.updateVisible = false
      this.contentVisible = true
    }, 1000)
  },
  methods: {
    updateEnd: function () {
      this.updateVisible = false
    }
  }
}
</script>

<style lang="scss">
.product-wrp{
  padding-top: 30px;
  position: relative;
  .loader-prod{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.page-enter-active, .page-leave-active {
  transition: opacity .6s, transform .6s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.linear-activity {
    overflow: hidden;
    width: 100%;
    height: 4px;
    background-color: #fff;
    margin-top: 15px;
}

.indeterminate {
    position: relative;
    width: 100%;
    height: 100%;
}

.indeterminate:before {
    content: '';
    position: absolute;
    height: 100%;
    background-color: #000;
    animation: indeterminate_first 1.5s infinite ease-out;
}

.indeterminate:after {
    content: '';
    position: absolute;
    height: 100%;
    background-color: #000;
    animation: indeterminate_second 1.5s infinite ease-in;
}

@keyframes indeterminate_first {
    0% {
        left: -100%;
        width: 100%;
    }
    100% {
        left: 100%;
        width: 10%;
    }
}

@keyframes indeterminate_second {
    0% {
        left: -150%;
        width: 100%;
    }
    100% {
        left: 100%;
        width: 10%;
    }
}
</style>
