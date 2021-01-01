<template>
  <div v-if="error">
    <h5 class="center-align">
      <i class="material-icons medium">error</i> <br>
      {{ error.message }}
    </h5>
  </div>
  <div v-else>
    <RoleList :roles="roles" />
  </div>
</template>

<script>
import RoleList from '@/components/pages/roles/RoleList'
import getCollection from '@/composables/getCollection'

export default {
  components: { RoleList },
  setup() {
    const { error, documents: roles } = getCollection('roles')

    return { error, roles }
  }
}
</script>

<style>

</style>