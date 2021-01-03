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
						<button class="button is-light" @click="handleLogout">
							Logout
						</button>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import useLogout from '@/composables/useLogout'
import { useRouter } from 'vue-router'

export default {
	setup() {
		// const { error, login, isPending } = useLogout()
		const router = useRouter()

		const handleLogout = () => {
			localStorage.clear()
			router.push({ name: 'Login' })
		}

		return { handleLogout }
	}
};
</script>

<style>
</style>