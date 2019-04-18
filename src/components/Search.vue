<template>
  <div>
    <div class="search">
      <!-- {{searchResult}} -->
      <a @click="toogleSearch" class="toogleSearch">
        <svg v-if="visible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 224.512 224.512" style="enable-background:new 0 0 224.512 224.512;" xml:space="preserve" class="close-search"><g><g>
            <polygon style="fill:#FFFFFF" points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254    0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254  " data-original="#010002" class="active-path" data-old_color="#ffffff"></polygon>
            </g></g>
          </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 451 451" style="enable-background:new 0 0 451 451;" xml:space="preserve" ><g><g>
          <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z" data-original="#000000" class="active-path" style="fill:#FFFFFF" data-old_color="#ffffff"></path>
        </g></g> </svg>
      </a>
      <transition name="slide-fade">
        <div v-if="visible" class="search-input">
          <input v-model="search" type="text" placeholder="search ...">
        </div>
      </transition>
       <transition name="slide-fade">
        <div v-if="searchResult && visible" class="result-search">
          <div v-for="(item, index) in searchResult" :key="index">
              <div @click="linkProduct(item.slug, item.category)" class="search-item">
                <div class="img">
                  <img v-bind:src="item.generalPhoto" v-bind:alt="item.title">
                </div>
                <div class="item-title">
                  {{item.title}}
                </div>
              </div>
          </div>
        </div>
       </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      visible: false,
      search: ''
    }
  },
  computed: {
    searchResult () {
     if(this.search != ''){
        return this.$store.getters.searchGet(this.search)
     }
    }
  },
  methods: {
    toogleSearch: function () {
      this.visible =! this.visible
      if(this.search != ''){
        this.search = ''
      }
    },
    linkProduct: function (slug,category) {
      this.visible = false;
      let slugCategory = this.$store.getters.getCategoryById(category)
      this.$router.push({ name: 'product', params: { category: slugCategory.slug, slug: slug } })
    }
  }
}
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
  .search{
    position: relative;
    margin-right: 10px;
    min-height: 23px;
    .result-search{
      position: absolute;
      background: #fff;
      right: 26px;
      top: 80px;
      height: auto;
      width: 320px;
      z-index: 10;
      -webkit-box-shadow: -1px 7px 24px -12px rgba(0,0,0,0.75);
      -moz-box-shadow: -1px 7px 24px -12px rgba(0,0,0,0.75);
      box-shadow: -1px 7px 24px -12px rgba(0,0,0,0.75);
      max-height: 400px;
      overflow-y: scroll;
      .search-item{
        width: 100%;
        display: flex;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        .img{
          width: 100px;
          min-width: 100px;
          height: 70px;
          img{
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
    .toogleSearch{
      cursor: pointer;
      min-width: 19px;
      min-height: 19px;
      display: block;
      svg{
        width: 19px;
        min-width: 19px;
        height: 19px;
      }
      .close-search{
        width: 15px;
        min-width: 15px;
        height: 15px;
      }
    }
    .search-input{
      position: absolute;
      background: #313131;
      right: 26px;
      top: 37px;
      width: 320px;
      height: 40px;
      width: 320px;
      z-index: 10;
      input{
        background: none;
        height: 100%;
        border-bottom: 1px solid #eee;
        outline: none;
        color: #fff;
        width: 100%;
        padding: 20px;
      }
    }
  }

  
.result-search::-webkit-scrollbar-button {
    background-image: url('');
    background-repeat: no-repeat;
    width: 12px;
    height: 0px;
}
.result-search::-webkit-scrollbar-track {
    background-color: #eee;
}
.result-search::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-color: #888;
}
.result-search::-webkit-scrollbar-thumb:hover {
    background-color: #888;
}
.result-search::-webkit-resizer {
    background-image: url('');
    background-repeat: no-repeat;
    width: 6px;
    height: 0px
}
.result-search::-webkit-scrollbar {
    width: 6px;
}
</style>