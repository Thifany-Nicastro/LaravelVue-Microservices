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
        <td>
          <a class="waves-effect waves-light blue lighten-2 btn">
            <i class="material-icons">edit</i>
          </a>
          <a class="waves-effect waves-light red lighten-2 btn">
            <i class="material-icons">delete</i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import useCollection from '@/composables/useCollection'

export default {
  props: ['orders'],
  setup(props) {

  }
}
</script>

<style>

</style>