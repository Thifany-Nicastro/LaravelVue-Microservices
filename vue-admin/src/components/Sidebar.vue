<template>
  <ul class="sidenav sidenav-fixed" style="top: auto; z-index: auto;">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link :to="{ name: 'Orders' }">Orders</router-link></li>
    <li><router-link to="/">Products</router-link></li>
    <li><router-link to="/">Customers</router-link></li>
    <li><router-link to="/">Permissions</router-link></li>
    <li><router-link to="/">Roles</router-link></li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>