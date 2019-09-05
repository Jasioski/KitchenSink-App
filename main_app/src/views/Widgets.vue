<template>
    <v-app>
    <title>Widgets Page</title>
    <div>
        <h1>Widgets Page</h1>
        <button class="btn btn-primary" @click="changeHeader">Change Header Text</button>
        <button class="btn btn-primary" @click="selCountry">Select Country</button>
        <br/>
        <br/>
        <v-tabs
            color="cyan"
            dark
            slider-color="yellow"
            >
            <v-tab
                v-for="cat in cats"
                :key="cat.id"
                ripple
            >
                Item {{ cat.name }}
            </v-tab>

            <v-tab-item
                v-for="cat in cats"
                :key="cat.id"
                ripple
            >
                <v-card flat>
                <v-card-text>{{ cat.name + '\n' + cat.breed + "\n" + cat.age }}</v-card-text>
                </v-card>
            </v-tab-item>

            <v-tab ripple>
              Card
            </v-tab>

            <v-tab-item>
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-img :src="require('@/assets/m50.jpg')"
                        height="200px"
                        >
                        </v-img>

                        <v-card-title primary-title>
                        <div>
                            <div class="headline">NRC M-50</div>
                            <span class="grey--text">Ottawa, ON K1K 3Y2</span>
                        </div>
                        </v-card-title>

                        <v-card-actions>
                        <v-btn flat @click="show=true">Show</v-btn>
                        <v-btn flat color ="purple" @click= "show=false">Hide</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                        </v-card-actions>

                        <v-slide-y-transition>
                        <v-card-text v-show="show">
                            The National Research Council is the primary national research and technology
                            organization of the Government of Canada, in science and technology research and development.
                            The Minister of Innovation, Science, and Economic Development is responsible for the National Research Council.
                        </v-card-text>
                        </v-slide-y-transition>
                    </v-card>
                    </v-flex>
                </v-layout>

            </v-tab-item>

            <v-tab ripple>
                Table
            </v-tab>
            <!-- Table tab code starts here-->
            <v-tab-item>
                <v-card>
                <v-card-title>
                Countries
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="countries"
                :search="search"
                >
                <template v-slot:items="props">
                    <td><v-btn flat color ="blue" @click="selected=props.item.name">{{ props.item.name }}</v-btn></td>
                    <td class="text-xs-center">{{ props.item.gdp }}</td>
                    <td class="text-xs-center">{{ props.item.gdp_per }}</td>
                    <td class="text-xs-center">{{ props.item.population }}</td>
                </template>
                <template v-slot:no-results>
                    <v-alert :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                    </v-alert>
                </template>
                </v-data-table>
            </v-card>
            <br />
            <v-card>
                <v-card-title>
                    Info: {{ this.selected }}
                </v-card-title>
                <div
                     v-for="country in countries"
                    :key="country.name"
                    ripple
                >
                    <v-card-text
                        v-if="country.name === selected">
                        {{ country.info }}
                    </v-card-text>
                </div>
            </v-card>
            </v-tab-item>
    <!-- Table tab code ends here-->
        </v-tabs>
    </div>
    </v-app>
</template>

<script>
import * as d3 from 'd3'
import { mapState } from 'vuex'

export default {
  data: () => ({
    selected: '',
    search: '',
    headers: [
      {
        text: 'Country',
        align: 'left',
        sortable: true,
        value: 'name'
      },

      { text: 'GDP (trillion usd)', value: 'gdp' },
      { text: 'GDP per capita (thousand usd)', value: 'gdp_per' },
      { text: 'Population (million)', value: 'population' }

    ],
    show: false
  }),

  computed: {
    ...mapState([
      'cats',
      'dogs',
      'countries'
    ])
  },

  methods: {
    changeHeader () {
      d3.select('h1')
        .text(prompt('What would you like to change the header to?', ''))
    },
    selCountry () {
      this.selected = prompt('What country would you like the info of?', this.selected)
    }
  }

}
</script>

<style>
 *{ text-transform: none !important; }
</style>
