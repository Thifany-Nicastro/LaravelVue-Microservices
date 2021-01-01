<template>
  <template v-if="route.name !== 'Login'">
    <Navbar />
    <div class="row">
      <div class="col s3">
        <Sidebar />
      </div>
      <div class="col s9">
        <router-view/>
      </div>
    </div>
  </template>
  <template v-else>
    aaa
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
