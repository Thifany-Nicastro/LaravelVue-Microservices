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
import OrderList from '@/components/pages/orders/OrderList'
import getCollection from '@/composables/getCollection'

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