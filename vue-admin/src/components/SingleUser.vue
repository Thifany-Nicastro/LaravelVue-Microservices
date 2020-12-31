<template>
  <div class="container">
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" :value="user.first_name">
            <label for="first_name" class="active">First Name</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" :value="user.last_name">
            <label for="last_name" class="active">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" :value="user.email">
            <label for="email" class="active">Email</label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useCollection from '@/composables/useCollection'

export default {
  props: ['user'],
  setup(props) {
    // const { deleteItem, updateItem } = useCollection('users', props.user.id)

    // const handleDelete = async () => {
    //   await deleteItem()
    // }

    // return { handleDelete }
  }
}
</script>

<style>

</style>