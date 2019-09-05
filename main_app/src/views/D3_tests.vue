<template>
    <div>
        <h1>Test Of D3</h1>
        <h2>DataSet</h2>
        <button class="btn btn-primary" @click="changeHeader">Change Header Text</button>
        <br />
        <br />
        <button class="btn btn-primary" @click="showData">Show Data</button>
        <button class="btn btn-primary" @click="showTransition">Show Transition</button>
        <br />
        <br />
        <input v-model='newData' @keydown.enter="addAnimal" :class="[newData.length < 1 ? 'red_color' : 'green_color']"><!--- fixed error (red was calling built in functions)-->
        <button class="btn btn-primary" @click="addData" v-bind:disabled="newData.length < 1">Add Data</button>
        <br />
        <br />
        <button class="btn btn-primary" @click="clearData">Clear Data</button>
        <div id="target"> </div>
    </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  data: () => ({
    dataSet: [],
    newData: ''
  }),

  methods: {
    changeHeader () {
      d3.select('h1')
        .text(prompt('What would you like to change the header to?', ''))
        .style('color', 'red')
        .append('p').text('Appended a paragrpah successfully')
    },

    addData () {
      this.dataSet.push(this.newData)
      this.newData = ''
    },

    showData () {
      d3.select('div#target')
        .style('color', 'blue')
        .selectAll('p')
        .data(this.dataSet)
        .enter()
        .append('p')
        .text(function (d) { return d })
    },

    showTransition () {
      d3.select('div')
        .append('div') // <-A
        .classed('box', true)
        .style('background-color', '#e9967a') // <-B
        .transition() // <-C
        .duration(5000) // <-D
        .style('background-color', '#add8e6') // <-E
        .style('margin-left', '1000px') // <-F
        .style('width', '100px')
        .style('height', '100px')
    },

    clearData () {
      this.dataSet = []
      d3.select('div#target')
        .selectAll('p').remove()
    }
  }
}

</script>

<style scoped>

.red_color {
  border:2px solid #ff0000
}

.green_color {
  border:2px solid rgb(86, 187, 86)
}

</style>
