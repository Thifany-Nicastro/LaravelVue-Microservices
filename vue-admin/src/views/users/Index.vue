<template>
  <div v-if="error">
    <h5 class="center-align">
      <i class="material-icons medium">error</i> <br>
      {{ error.message }}
    </h5>
  </div>
  <div v-if="users">
    <UserList :users="users" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import Spinner from '@/components/ui/Spinner'
import UserList from '@/components/pages/users/UserList'
import getCollection from '@/composables/getCollection'

export default {
  components: { Spinner, UserList },
  setup() {
    const { error, documents: users } = getCollection('users')

    return { error, users }
  }
}
</script>

<style>

</style>