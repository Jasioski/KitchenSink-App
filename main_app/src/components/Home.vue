<template>

  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <b
          href="https://www.linkedin.com/in/john-grabkowski-84319714b/"
          target="_blank"
        >
          My LinkedIn
        </b>
      </li>

    </ul>

    <input v-model='newAnimal' @keydown.enter="addAnimal" :class="[newAnimal.length < 2 ? 'red_color' : 'green_color']"><!--- fixed error (red was calling built in functions)-->

    <button class="btn btn-primary" @click="addAnimal" v-bind:disabled="newAnimal.length < 2"> Add </button>

    <ul>
      <li
        v-for="animal in animals" v-bind:key = animal.id>{{ animal.name }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      animals: [
        { name: 'Dog' },
        { name: 'Fish' },
        { name: 'Cat ' }
      ],
      newAnimal: ''

    }
  },

  methods: {
    addAnimal: function () {
      this.animals.push({name: this.newAnimal})
      this.newAnimal = ''
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

b {
  color: #42b983;
}

.red_color {
  border:2px solid #ff0000
}

.green_color {
  border:2px solid rgb(86, 187, 86)
}

</style>
