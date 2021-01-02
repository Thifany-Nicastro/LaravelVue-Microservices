<template>
	<aside class="menu">
		<ul class="menu-list">
			<li>
        <router-link to="/">
				  <i class="fas fa-home"></i> Home
			  </router-link>
      </li>
			<li>
        <router-link :to="{ name: 'Orders' }">
				  <i class="fas fa-chart-line"></i> Orders
			  </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Products' }">
				  <i class="fas fa-shopping-cart"></i> Products
			  </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Users' }">
          <i class="fas fa-users"></i> Customers
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <i class="fas fa-check"></i> Permissions
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Roles' }">
          <i class="fas fa-id-card-alt"></i> Roles
        </router-link>
      </li>
		</ul>
	</aside>
</template>

<script>
	export default {};
</script>

<style>
</style>