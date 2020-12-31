<template>
  <tr v-for="order in orders" :key="order.id">
    <td>{{ order.id }}</td>
    <td>{{ order.customer.full_name }}</td>
    <td>{{ order.total }}</td>
  </tr>
</template>

<script>
export default {
  props: ['orders']
}
</script>

<style>

</style>