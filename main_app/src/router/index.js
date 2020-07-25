import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import addAnimal from '@/components/AddAnimal'
import Animals from '@/views/Animals.vue'
import Cats from '@/views/Cats.vue'
import Dogs from '@/views/Dogs.vue'
import Pet from '@/views/Pet.vue'
import Widgets from '@/views/Widgets.vue'
import D3tests from '@/views/D3_tests.vue'
import NotFound from '@/views/NotFound.vue'
import D3Interactive from '@/views/d3_demos/components/D3_Interactive.vue'
import D3Graph from '@/views/D3BookGraph.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/animals',
      name: 'Animals',
      component: Animals
    },

    {
      path: '/add_animal',
      name: 'addAnimal',
      component: addAnimal
    },

    {
      path: '/cats',
      name: 'Cats',
      component: Cats
    },

    {
      path: '/dogs',
      name: 'Dogs',
      component: Dogs
    },

    {
      path: '/pets/:species/:id',
      name: 'Pet',
      component: Pet
    },

    {
      path: '/widgets',
      name: 'Widgets',
      component: Widgets
    },

    {
      path: '/d3',
      name: 'D3tests',
      component: D3tests
    },

    {
      path: '/d3Interactive',
      name: 'D3Interactive',
      component: D3Interactive
    },

    {
      path: '/d3Graphs',
      name: 'D3Graphs',
      component: D3Graph
    },

    {
      path: '/**',
      component: NotFound
    }

  ]
})
