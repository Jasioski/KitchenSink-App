<template>
    <div>
        <h1>ERROR!</h1>
        <h2>Page not found...</h2>
        <v-btn @click="goHome"> Home </v-btn>
    </div>
</template>

<script>
export default {
  data: () => ({
  }),

  methods: {
    goHome () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>

</style>
