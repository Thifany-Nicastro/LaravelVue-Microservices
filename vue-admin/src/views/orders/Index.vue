<template>
  <OrderList :orders="orders" />
</template>

<script>
import getCollection from '@/composables/getCollection'
import OrderList from '@/components/OrderList'

export default {
  components: { OrderList },
  setup() {
    const { error, documents: orders } = getCollection('orders')

    return { error, orders }
  }
}
</script>

<style>

</style>