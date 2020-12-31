<template>
  <table class="striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Customer</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <OrderList :orders="orders" />
    </tbody>
  </table>
</template>

<script>
import getCollection from '../composables/getCollection'
import OrderList from '../components/OrderList'

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