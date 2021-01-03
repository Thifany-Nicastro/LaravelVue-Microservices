<template>
	<div class="columns is-centered">
		<div class="column is-6">
			<div class="card">

				<header class="card-header">
					<p class="card-header-title">Login</p>
				</header>

				<div class="card-content">
          <form @submit.prevent="handleSubmit">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" v-model="email">
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" v-model="password">
              </div>
            </div>

            <article v-if="error" class="message is-danger">
              <div class="message-header">
                <p>{{ error }}</p>
                <button type="button" class="delete" aria-label="delete" @click="closeMessage" />
              </div>
            </article>
            
            <div class="field is-grouped">
              <div class="control">
                <button type="submit" class="button is-link" v-if="!isPending">Login</button>
                <button class="button is-link" v-if="isPending" disabled>Loading</button>
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
import useLogin from '@/composables/useLogin'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { error, login, isPending } = useLogin()
    const router = useRouter()

    const email = ref('')
    const password = ref('')

    const closeMessage = () => {
      error.value = false
    }

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        router.push({ name: 'Users' })
      }
    }

    return { email, password, handleSubmit, error, isPending, closeMessage }
  }
};
</script>

<style>
</style>