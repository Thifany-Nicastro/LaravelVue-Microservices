<template>
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

<script>
import Navbar from '@/components/layout/Navbar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'

export default {
  components: { Navbar, Sidebar }
}
</script>

<style>

</style>
