<template>
  <ul class="sidenav sidenav-fixed" style="top: auto; z-index: auto;">
    <li><router-link to="/"><i class="material-icons">home</i> Home</router-link></li>
    <li><router-link :to="{ name: 'Orders' }"><i class="material-icons">show_chart</i> Orders</router-link></li>
    <li><router-link :to="{ name: 'Products' }"><i class="material-icons">shopping_cart</i> Products</router-link></li>
    <li><router-link :to="{ name: 'Users' }"><i class="material-icons">people</i> Customers</router-link></li>
    <li><router-link to="/"><i class="material-icons">check</i> Permissions</router-link></li>
    <li><router-link :to="{ name: 'Roles' }"><i class="material-icons">assignment_ind</i> Roles</router-link></li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>