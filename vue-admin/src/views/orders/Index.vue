<template>
<div v-if="error">
    <h5 class="center-align">
      <i class="material-icons medium">error</i> <br>
      {{ error.message }}
    </h5>
  </div>
  <div v-if="orders">
    <OrderList :orders="orders" />
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import OrderList from '@/components/OrderList'

export default {
  components: { OrderList },
  setup() {
    const { error, documents: orders } = getCollection('orders')

    return { error, orders }
  }
}
</script>

<style>

</style>