<template>
  <div>
    <transition name="fade">
      <div v-if="updateVisible" class="loader-prod">
        <div class="linear-activity">
            <div class="indeterminate"></div>
        </div>
      </div>
    </transition>
    <transition name="page" mode="out-in">
      <div v-if="contentVisible">
        <div class="category-list">
          <ul>
             <li>
              <button @click="filterProd(null)">
                All
              </button>
            </li>
            <li v-for="(category, index) in categoriesList" :key="index">
              <button @click="filterProd(category.id)">
                {{category.title}}
              </button>
            </li>
          </ul>
        </div>
        <v-layout row wrap>
          <v-flex v-for="(product, index) in products" :key="index" xs3>
            <Item :item='product' />
          </v-flex>
        </v-layout>
      </div>
    </transition>
  </div>
</template>

<script>
import Item from '@/views/admin/components/Item.vue'
export default {
  components: {
    Item
  },
  data(){
    return{
      category: null,
      categoriesList: null,
      updateVisible: false,
      contentVisible: true
    }
  },
   mounted() {
     this.$on('deleteloader', this.deleteloader);
  },
  created(){
    this.categoriesList = this.$store.getters.getCategories
  },
  computed: {
    products(){
      return this.$store.getters.getAllProducts(this.category)
    }
  },
  updated(){
    setTimeout(() => {
      this.updateVisible = false
      this.contentVisible = true
    }, 1000)
  },
  methods: {
    filterProd: function(id){
      this.updateVisible = true
      this.contentVisible = false
      this.category = id
    },
    deleteloader: function () {
       this.updateVisible = true
       this.contentVisible = false
    }
  }
}
</script>

<style lang="scss">
 .loader-prod{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
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
    height: 2px;
    background-color: #fff;
    margin-top: 1px;
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

.page-enter-active, .page-leave-active {
  transition: opacity .6s, transform .6s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.category-list{
  margin-bottom: 15px;
  ul{
    margin: 0;
    padding: 0;
    button{
      outline: none;
      margin-right: 10px;
    }
  }
}

</style>
