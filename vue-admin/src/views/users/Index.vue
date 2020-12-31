<template>
  <div v-if="error">
    <h5 class="center-align">
      <i class="material-icons medium">error</i> <br>
      {{ error.message }}
    </h5>
  </div>
  <div v-else>
    <UserList :users="users" />
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import UserList from '@/components/UserList'

export default {
  components: { UserList },
  setup() {
    const { error, documents: users } = getCollection('users')

    return { error, users }
  }
}
</script>

<style>

</style>