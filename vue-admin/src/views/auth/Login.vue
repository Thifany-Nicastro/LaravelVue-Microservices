<template>
	<div class="columns is-centered">
		<div class="column is-6">
			<div class="card">

				<header class="card-header">
					<p class="card-header-title">Login</p>
				</header>

				<div class="card-content">
          <form>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email">
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password">
              </div>
            </div>
            
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
              <div class="control">
                <router-link :to="{ name: 'Users' }" class="button is-link is-light">
                  Forgot your password?
                </router-link>
              </div>
            </div>
          </form>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style>
</style>