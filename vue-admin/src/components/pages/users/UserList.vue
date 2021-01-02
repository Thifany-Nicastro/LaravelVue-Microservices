<template>
    <div class="table-container">
      <table class="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <router-link :to="{ name: 'UserDetails', params: { id: user.id } }" class="button is-link mr-1">
                <i class="fas fa-edit"></i>
              </router-link>
              <button class="button is-danger" @click="handleDelete(user.id)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  props: ['users'],
}
</script>

<style>

</style>