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
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.customer.full_name }}</td>
        <td>{{ order.total }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import getCollection from '../composables/getCollection'

export default {
  setup() {
    const { error, documents: orders } = getCollection('orders')

    return { error, orders }
  }
}
</script>

<style>

</style>