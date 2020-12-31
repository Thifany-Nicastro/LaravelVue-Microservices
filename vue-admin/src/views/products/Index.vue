<template>
  <div v-if="error">
    <h5 class="center-align">
      <i class="material-icons medium">error</i> <br>
      {{ error.message }}
    </h5>
  </div>
  <div v-else>
    <ProductList :products="products" />
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import ProductList from '@/components/products/ProductList'

export default {
  components: { ProductList },
  setup() {
    const { error, documents: products } = getCollection('products')

    return { error, products }
  }
}
</script>

<style>

</style>