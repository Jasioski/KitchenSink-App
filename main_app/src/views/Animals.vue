<template>
    <div>
        <h1>Animals Added</h1>
            <h2>{{ message }}</h2>
            <p v-for="item in items" v-bind:key="item.id">
                {{ item.title }}
            </p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello Animals!',
      items: [{ id: 1, title: 'an item' }, { id: 2, title: 'another item' }]
    }
  }
}
</script>

<style>

</style>
