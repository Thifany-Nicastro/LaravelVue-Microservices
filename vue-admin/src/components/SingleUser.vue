<template>
  <td>{{ user.id }}</td>
  <td>{{ user.first_name }}</td>
  <td>{{ user.last_name }}</td>
  <td>{{ user.email }}</td>
  <td>
    <a class="waves-effect waves-light blue lighten-2 btn">
      <i class="material-icons">edit</i>
    </a>
    <a class="waves-effect waves-light red lighten-2 btn" @click="handleDelete(user.id)">
      <i class="material-icons">delete</i>
    </a>
  </td>
</template>

<script>
import useCollection from '@/composables/useCollection'

export default {
  props: ['user'],
  setup(props) {  
    const { deleteItem, updateItem } = useCollection('users', props.user.id)

    const handleDelete = async () => {
      await deleteItem()
    }

    return { handleDelete }
  }
}
</script>

<style>

</style>