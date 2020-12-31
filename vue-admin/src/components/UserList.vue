<template>
  <table class="striped">
    <thead>
      <tr>
        <th>#</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.first_name }}</td>
        <td>{{ user.last_name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <router-link :to="{ name: 'UserDetails', params: { id: user.id } }" class="waves-effect waves-light blue lighten-2 btn">
            <i class="material-icons">edit</i>
          </router-link>
          <a class="waves-effect waves-light red lighten-2 btn" @click="handleDelete(user.id)">
            <i class="material-icons">delete</i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['users']
}
</script>

<style>

</style>