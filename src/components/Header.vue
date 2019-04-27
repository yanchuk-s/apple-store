<template>
  <div class="pSticky">
    <header>
      <div class="container">
        <div class="dflex">
          <div class="mobile-nav">
            <a @click="visibleNav">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve" width="512" height="512" class=""><g><g>
                <g id="Menu">
                  <path d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03    C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z" data-original="#000000" class="active-path" style="fill:#FFFFFF" data-old_color="#ffffff"></path>
                  <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03    S379.58,180.455,372.939,180.455z" data-original="#000000" class="active-path" style="fill:#FFFFFF" data-old_color="#ffffff"></path>
                  <path d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909    c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z" data-original="#000000" class="active-path" style="fill:#FFFFFF" data-old_color="#ffffff"></path></g><g></g><g></g><g></g><g></g><g></g><g></g>
                  </g></g> 
              </svg>
            </a>
            <transition name="fade">
              <div v-if="navIsVisible" class="mobile-nav-list">
                <div class="header-mob-nav">
                  <button
                    @click="visibleNav"
                    class="close-nav"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 224.512 224.512" style="enable-background:new 0 0 224.512 224.512;" xml:space="preserve" width="512" height="512" class=""><g><g>
                      <polygon style="fill:#FFFFFF" points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254    0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254  " data-original="#010002" class="active-path" data-old_color="#ffffff"></polygon>
                      </g></g>
                    </svg>
                  </button>
                </div>
                <ul>
                  <li
                    v-for="(category, index) in categories" :key="index"
                  >
                    <a @click="catalogLink(category.slug)" class="nav-link" href="javascript:void(0)">{{category.title}}</a>
                  </li>
                </ul>
              </div>
            </transition>
          </div>
          <div class="logo">
            <router-link tag="a" to="/">
              <a class="after-shadow">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 305 305" style="enable-background:new 0 0 305 305;" xml:space="preserve" width="512" height="512" class=""><g><g id="XMLID_228_">
                  <path id="XMLID_229_" d="M40.738,112.119c-25.785,44.745-9.393,112.648,19.121,153.82C74.092,286.523,88.502,305,108.239,305   c0.372,0,0.745-0.007,1.127-0.022c9.273-0.37,15.974-3.225,22.453-5.984c7.274-3.1,14.797-6.305,26.597-6.305   c11.226,0,18.39,3.101,25.318,6.099c6.828,2.954,13.861,6.01,24.253,5.815c22.232-0.414,35.882-20.352,47.925-37.941   c12.567-18.365,18.871-36.196,20.998-43.01l0.086-0.271c0.405-1.211-0.167-2.533-1.328-3.066c-0.032-0.015-0.15-0.064-0.183-0.078   c-3.915-1.601-38.257-16.836-38.618-58.36c-0.335-33.736,25.763-51.601,30.997-54.839l0.244-0.152   c0.567-0.365,0.962-0.944,1.096-1.606c0.134-0.661-0.006-1.349-0.386-1.905c-18.014-26.362-45.624-30.335-56.74-30.813   c-1.613-0.161-3.278-0.242-4.95-0.242c-13.056,0-25.563,4.931-35.611,8.893c-6.936,2.735-12.927,5.097-17.059,5.097   c-4.643,0-10.668-2.391-17.645-5.159c-9.33-3.703-19.905-7.899-31.1-7.899c-0.267,0-0.53,0.003-0.789,0.008   C78.894,73.643,54.298,88.535,40.738,112.119z" data-original="#000000" class="active-path" style="fill:#FFFFFF" data-old_color="#F5F8F8"></path>
                  <path id="XMLID_230_" d="M212.101,0.002c-15.763,0.642-34.672,10.345-45.974,23.583c-9.605,11.127-18.988,29.679-16.516,48.379   c0.155,1.17,1.107,2.073,2.284,2.164c1.064,0.083,2.15,0.125,3.232,0.126c15.413,0,32.04-8.527,43.395-22.257   c11.951-14.498,17.994-33.104,16.166-49.77C214.544,0.921,213.395-0.049,212.101,0.002z" data-original="#000000" class="active-path" style="fill:#FFFFFF" data-old_color="#F5F8F8"></path>
                  </g></g>
                </svg>
              </a>
            </router-link>
             <router-link class="admin-link" v-if="login" tag="a" to="/admin">
                <a class="after-shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 268.765 268.765" style="enable-background:new 0 0 268.765 268.765;" xml:space="preserve" width="512" height="512" class=""><g><g id="Settings">
                    <g>
                      <path style="fill:#FFFFFF" d="M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824    C179.418,159.385,159.312,179.491,134.595,179.491z" data-original="#000000" class="active-path" data-old_color="#ffffff"></path>
                    </g>
                  </g></g> </svg>
                </a>
              </router-link>
          </div>
          <nav>
            <ul>
              <li
                v-for="(category, index) in categories" :key="index"
              >
                <a @click="catalogLink(category.slug)" class="nav-link" href="javascript:void(0)">{{category.title}}</a>
              </li>
            </ul>
          </nav>
          <div class="dflex">
             <Search />
             <HeaderCart />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import HeaderCart from '@/components/HeaderCart.vue'
import Search from '@/components/Search.vue'
export default {
  name: 'Header',
  components: {
    HeaderCart,
    Search
  },
  data() {
    return {
      navIsVisible: false
    }
  },
  created(){
    if(this.$cookie.get('login')){
      // console.log('login')
      this.$store.state.login = this.$cookie.get('login')
    }
  },
  computed: {
    categories(){
      return this.$store.getters.getCategories
    },
    login(){
      return this.$store.getters.getLogin
    }
  },
  methods: {
    visibleNav: function() {
      this.navIsVisible =! this.navIsVisible
    },
    catalogLink: function(slug) {
      if(this.navIsVisible == true){
         this.navIsVisible = false
       }
      //  this.$router.push(slug)
        this.$router.push({ name: slug })
    }
  }
}
</script>

<style scoped lang="scss">

.pSticky{
  position: sticky;
  top: 0;
  z-index: 9;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
header{
  background: rgba(45,45,45,1);
  .dflex{
    height: 100%;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    .mobile-nav{
      display: none;
      a{
        cursor: pointer;
        svg{
          width: 22px;
          min-width: 22px;
          height: 22px;
        }
      }
      .mobile-nav-list{
        position: absolute;
        background: #313131;
        width: 100%;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 11;
        .header-mob-nav{
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          .close-nav{
            outline: none;
            background: none;
            border: none;
            svg{
              width: 22px;
              min-width: 22px;
              height: 22px;
            }
          }
        }
        ul{
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 0;
          li{
            width: 100%;
            a{
              width: 100%;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ffffff;
              font-weight: 300;
              font-size: 14px;
              border-bottom: 1px solid #4a4a4a;
            }
          }
        }
      }
    }
    .logo{
      display: flex;
      .admin-link{
        margin-left: 6px;
      }
      a{
        opacity: .8;
        cursor: pointer;
        position: relative;
        display: block;
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
    nav{
      height: 100%;
      ul{
        height: 100%;
        li{
          height: 100%;
          .nav-link{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-weight: 300;
            font-size: 14px;
            min-width: 100px;

            -webkit-transition: .6s; /* Safari */
            transition: .6s;
            &:hover{
              opacity: .65;
              -webkit-transition: .6s; /* Safari */
               transition: .6s;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px){
header .dflex .logo{
  margin-left: 20px;
}
header{
  .dflex{
    .mobile-nav{
      display: block;
    }
    nav{
      display: none;
    }
  }
}
}
</style>
