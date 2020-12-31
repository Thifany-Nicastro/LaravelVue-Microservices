<template>
  <div v-if="error">
    <h5 class="center-align">
      <i class="material-icons medium">error</i> <br>
      {{ error.message }}
    </h5>
  </div>
  <div v-if="user">
    <SingleUser :user="user" />
  </div>
</template>

<script>
import getModel from '@/composables/getModel'
import SingleUser from '@/components/SingleUser'

export default {
  props: ['id'],
  components: { SingleUser },
  setup(props) {
    const { error, model: user } = getModel('users', props.id)

    return { error, user }
  }
}
</script>

<style>

</style>