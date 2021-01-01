<template>
  <table class="striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.description.substring(0, 40) + '...' }}</td>
        <td>{{ product.price }}</td>
        <td>
          <router-link :to="{ name: 'UserDetails', params: { id: product.id } }" class="waves-effect waves-light blue lighten-2 btn">
            <i class="material-icons">edit</i>
          </router-link>
          <a class="waves-effect waves-light red lighten-2 btn" @click="handleDelete(product.id)">
            <i class="material-icons">delete</i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['products'],
}
</script>

<style>

</style>