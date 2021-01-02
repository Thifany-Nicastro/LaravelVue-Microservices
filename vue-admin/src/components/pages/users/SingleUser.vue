<template>
  <form>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" v-model="firstName">
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" v-model="email">
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <router-link :to="{ name: 'Users' }" class="button is-link is-light">
          Cancel
        </router-link>
      </div>
    </div>
  </form>
  
</template>

<script>
import useModel from '@/composables/useModel'
import { ref } from 'vue'

export default {
  props: ['user'],
  setup(props) {
    // const { deleteItem, updateItem } = useCollection('users', props.user.id)
    const firstName = ref(props.user.first_name)
    const email = ref(props.user.email)

    // const handleDelete = async () => {
    //   await deleteItem()
    // }

    return { email, firstName }
  }
}
</script>

<style>

</style>