<template>
  <div>
     <div class="item">
       <a class="photo-link" @click="linkProduct(item.slug, item.category)">
         <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img v-bind:src='item.generalPhoto' alt="Avatar">
            </div>
            <div class="flip-card-back">
              <img v-bind:src='item.photos[1].src' alt="Avatar">
            </div>
          </div>
        </div>
       </a>
        <div class="item-title">
          <a @click="linkProduct(item.slug, item.category)">{{item.title}}</a>
        </div>
        <div class="item-price">
          {{item.price}}$
        </div>
        <div class="item-admin-btns">
          <div class="item-edit">
            <a @click="edit(item.id)">Edit</a>
          </div>
          <div class="item-delete">
            <a @click="deleteProduct(item.id)">Delete</a>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item:{
      type: Object
    }
  },
  methods: {
    linkProduct: function (slug,category) {
      let slugCategory = this.$store.getters.getCategoryById(category)
      this.$router.push({ name: 'product', params: { category: slugCategory.slug, slug: slug } })
    },
    addToCart: function(id){
      this.$store.dispatch('addTocart', id)
    },
    edit: function (id) {
       this.$router.push({ name: 'edit', params: { id: id } })
    },
    deleteProduct: function (id) {
      // console.log(id)
      this.$parent.$emit('deleteloader');

      this.$store.dispatch('deleteProduct', id)
      this.$notify({
        group: 'foo',
        title: 'Delete product',
        text: 'Product delete',
        duration: 3000,
        speed: 1000
      });
    }
  }
}
</script>

<style lang="scss">

.item{
  margin: 10px;
  padding: 20px;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  .photo-link{
    cursor: pointer;
  }
  .item-title{
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    a{
      cursor: pointer;
      &:hover{
        opacity: 0.7;
      }
    }
  }
  .item-price{
    text-align: center;
    margin-bottom: 10px;
  }
  .item-admin-btns{
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
      cursor: pointer;
      font-weight: 500;
      &:hover{
        opacity: .7;
      }
    }
  }
}


.flip-card {
  background-color: transparent;
  width: 100%;
  height: 150px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 80%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front{
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.flip-card-back{
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.flip-card-back {
  transform: rotateY(180deg);
}

@media screen and (max-width: 991px){
  .flip-card{
    height: 150px;
  }
}

@media screen and (max-width: 600px){
  .flip-card{
    height: 100px;
  }
}
</style>
