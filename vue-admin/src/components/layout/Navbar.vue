<template>
	<nav class="navbar has-background-light" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
			</a>

			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<router-link :to="{ name: 'Login' }" class="button is-primary">
							<b>Login</b>
						</router-link>
						<router-link to="/" class="button is-light">
							Logout
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {};
</script>

<style>
</style>