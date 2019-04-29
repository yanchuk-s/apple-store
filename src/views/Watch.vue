<template>
  <div>
    <div v-if="items.length < 1">
      No products
    </div>
   <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="(product, index) in items" :key="index" xs3>
        <Item :item='product' />
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
export default {
  name: 'Mac',
  components: {
    Item
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    let categoryId = this.$store.getters.getCategoryBySlug('watch')
    this.items = this.$store.getters.getProductsByCategory(categoryId.id)
  },
  methods: {

  }
}
</script>
