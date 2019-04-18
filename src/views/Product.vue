<template>
  <div class="product-wrp">
    <transition name="fade">
      <div v-if="updateVisible" class="loader-prod">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
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
  height: 100%;
  position: relative;
  .loader-prod{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(250,250,250,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
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

.spinner {
  width: 40px;
  height: 40px;

  position: relative;
  margin: 100px auto;
}

.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>
