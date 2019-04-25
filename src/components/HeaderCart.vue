<template>
  <div class="header-cart">
      <button @click="showHide" class="header-cart-isVisible">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 489 489" style="enable-background:new 0 0 489 489;" xml:space="preserve" width="512" height="512" class=""><g><g>
          <path d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3   c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1   C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462   H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41   c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z" data-original="#000000" class="active-path" style="fill:#FFFFFF" data-old_color="#ffffff"></path>
          </g></g>
        </svg>
        <transition name="fade">
          <span v-if="cart.length > 0" class="cart-counter">
            {{cart.length}}
          </span>
        </transition>
      </button>
      <transition name="slide-fade">
        <div v-if="isVisible" class="cart">
          <div v-for="(item, index) in cart" :key="index">
              <div class="cart-item">
                <div @click="linkProduct(item.slug, item.category)" class="img">
                  <img v-bind:src="item.generalPhoto" v-bind:alt="item.title">
                </div>
                <div @click="linkProduct(item.slug, item.category)" class="item-title">
                  {{item.title}}
                </div>
                <div class="delete">
                  <v-btn
                    @click="deleteFromCart(item.id)"
                    flat icon color="pink"
                  >
                    <v-icon>delete_outline</v-icon>
                  </v-btn>
                </div>
              </div>
          </div>
        </div>
       </transition>
  </div>
</template>

<script>
export default {
  name:'HeaderCart',
  data() {
    return {
      isVisible: false
    }
  },
  created() {
    // if(localStorage.getItem('cart')){
    //   this.$store.state.cart = JSON.parse(localStorage.getItem('cart'));
    // }
  },
  computed:{
    cart() {
     return this.$store.getters.getCart
    }
  },
  methods:{
    showHide: function () {
      if(this.cart.length > 0){
        this.isVisible =! this.isVisible
      }
    },
    deleteFromCart: function(id){
      // console.log(id)
      if(this.cart.length == 1){
        this.isVisible = false
      }
      this.$store.dispatch('deleteFromCart', id)
    },
    linkProduct: function (slug,category) {
      this.isVisible = false;
      let slugCategory = this.$store.getters.getCategoryById(category)
      this.$router.push({ name: 'product', params: { category: slugCategory.slug, slug: slug } })
    }
  }
}
</script>

<style lang="scss">
.header-cart{
  .header-cart-isVisible{
    background: none;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    opacity: .8;
    position: relative;
    .cart-counter{
      position: absolute;
      width: 16px;
      height: 16px;
      top: -4px;
      right: -6px;
      font-size: 10px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #111111;
      background: #fff;
    }
    svg{
      width: 22px;
      min-width: 22px;
      height: 22px;
    }
     &:hover{
      opacity: 1;
    }
  }
}

.cart{
  position: absolute;
  background: #fff;
  right: 0;
  top: 50px;
  height: auto;
  width: 320px;
  z-index: 10;
  -webkit-box-shadow: -1px 7px 24px -12px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 7px 24px -12px rgba(0,0,0,0.75);
  box-shadow: -1px 7px 24px -12px rgba(0,0,0,0.75);
  max-height: 420px;
  overflow-y: scroll;
  .cart-item{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    justify-content: space-between;
    .img{
      width: 70px;
      min-width: 70px;
      height: 60px;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
