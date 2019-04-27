<template>
  <div>
    <h1>ADD PRODUCT</h1>
     <v-layout row wrap class="add-rod-wrp">
      <v-flex xs6>
        <v-text-field
          v-model="title"
          label="Title"
          required
        ></v-text-field>
        <v-text-field
          v-model="price"
          label="Price"
          required
        ></v-text-field>
        <v-text-field
          v-model="description"
          label="Description"
          required
        ></v-text-field>
        <!-- {{categories.title}} -->
        <v-select
          :items="categories"
          name="Size"
          label="Select category"
          v-model="category"
          item-text="title"
        ></v-select>
      </v-flex>
      <v-flex xs6>
        <transition name="fade">
          <div class="Error-wrp Error-wrp-img" v-if="fillURL">
            Fill in the field
          </div>
        </transition>
        <div class="photo-input-wrp" v-for="(item, index) in photos" :key="index">
         <v-text-field
          v-model="photos[index].src"
          label="Photo URL"
          required
        ></v-text-field>
        <button @click="deleteInput(index)">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512" height="512" viewBox="0 0 482.428 482.429" style="enable-background:new 0 0 482.428 482.429;" xml:space="preserve" class=""><g><g>
            <g>
              <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098    c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117    h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828    C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879    C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096    c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266    c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979    V115.744z" data-original="#000000" class="active-path" style="fill:#000000"></path>
              <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07    c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z" data-original="#000000" class="active-path" style="fill:#000000"></path>
              <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07    c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z" data-original="#000000" class="active-path" style="fill:#000000"></path>
              <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07    c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z" data-original="#000000" class="active-path" style="fill:#000000"></path>
            </g>
          </g></g> </svg>
        </button>
      </div>
       <div class="add-photo-btn">
         <v-btn @click="addInput">Add more photos</v-btn>
       </div>
      </v-flex>
    </v-layout>
    <transition name="fade">
      <div class="Error-wrp" v-if="infoError">
        {{textError}}
      </div>
    </transition>
    <div class="add-prod-wrp-btn">
        <v-btn @click="addProd">Add</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      infoError:false,
      textError: '',
      fillURL: false,
      categories: [],
      title: '',
      price: null,
      description: '',
      category: '',
      photos: [
        {
          src: ''
        }
      ]
    }
  },
  created(){
    this.categories = this.$store.getters.getCategories
  },
  methods:{
    addInput: function(){
      let newSrc = {
        src: ''
      }
      let error = false
      this.photos.forEach(element => {
        if(element.src == ''){
          error = true
        }
      });
      this.fillURL = true
      if(error == false){
        this.photos.push(newSrc)
        this.fillURL = false
      }
    },
    deleteInput: function (index) {
      this.photos.splice(index, 1)
    },
    addProd: function(){
      let slug = this.slug(this.title)

      if(this.title == '' || this.price == '' || this.description == '' || this.category == ''){
        this.infoError = true
        this.textError = 'Fill in all the fields'
      }else{
        if(this.photos.length < 2){
           this.infoError = true
           this.textError = 'Min two photos'
        }else{
          this.infoError = false
          // console.log('GOOD')
          let error = false
          this.photos.forEach(element => {
            if(element.src == ''){
              error = true
            }
          });
          this.fillURL = true
          if(error == false){
            this.fillURL = false
            let categoryId = this.$store.getters.getCategoryByTitle(this.category)
            let product = {
              title: this.title,
              price: this.price,
              description: this.description,
              generalPhoto: this.photos[0].src,
              photos: this.photos,
              category: categoryId.id,
              slug: slug
            }

            console.log(product)

            this.title = ''
            this.price = ''
            this.description = ''
            this.photos = [
              {
                url: ''
              }
            ]
            this.category = ''
          }
        }
      }
    },
    slug: function (title) {
      return title
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
    }
  }
}
</script>


<style lang="scss">
.add-rod-wrp{
  .xs6{
    -ms-flex-preferred-size: 50%;
    flex-basis: 48%;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 48%;
    margin: 0 1%;
  }
}

.v-menu__content{
  top: 0!important;
  left: 0!important;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.Error-wrp{
  width: 300px;
  font-weight: 500;
  font-size: 12px;
  border: 2px solid red;
  margin-left: 1%;
  padding: 10px;
}

.Error-wrp-img{
  margin-left: 0;
}

.add-prod-wrp-btn{
  margin-top: 15px;
  button{
    margin: 0;
    margin-left: 1%;
    width: 300px;
    background: #0070c9;
    color: #fff;
  }
}

.add-photo-btn{
  button{
    margin-left: 0;
  }
}

.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat){
  background: #0070c9;
  color: #fff;
}

.photo-input-wrp{
  display: flex;
  button{
    svg{
      width: 20px;
      height: 20px;
      min-width: 20px;
    }
  }
}
</style>
