<template>
  <template v-if="route.name !== 'Login'">
    <Navbar />
    <div class="columns mt-5 is-centered">
      <div class="column is-2">
        <Sidebar />
      </div>
      <div class="column is-8">
        <div class="card p-3">
          <router-view/>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <router-view/>
  </template>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import { useRoute } from 'vue-router'

export default {
  components: { Navbar, Sidebar },
  setup() {
    const route = useRoute()

    return { route }
  }
}
</script>

<style>

</style>
