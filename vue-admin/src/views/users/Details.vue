<template>
  <div>
    {{id}}
  </div>
</template>

<script>
import getModel from '@/composables/getModel'

export default {
  props: ['id'],
  setup(props) {
    const { error, model: user } = getModel('users', props.id)

    return { error, user }
  }
}
</script>

<style>

</style>