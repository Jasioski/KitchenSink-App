<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Animal Name"
      v-model="name"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-text-field
      label="Animal Age"
      v-model="age"
      required
      :rules="ageRules"
    ></v-text-field>
    <v-text-field
      label="Type"
      v-model="type"
      required
      :rules="typeRules"
    ></v-text-field>
    <v-text-field
      label="Gender"
      v-model="gender"
    ></v-text-field>
    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: true,
    name: '',
    age: '',
    type: '',
    gender: '',

    nameRules: [
      v => !!v || 'Animal name is required'
    ],
    ageRules: [
      v => !!v || 'Animal age is required',
      v => (v && v <= 400) || 'Age must be less than or equal to 400',
      v => (v && !isNaN(v)) || 'Age must be a number'
    ],
    typeRules: [
      v => !!v || 'Animal type is required'
    ]
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        return axios({
          method: 'post',
          data: {
            name: this.name,
            age: this.age,
            type: this.type,
            gender: this.gender
          },
          url: 'http://132.246.129.192:8082/animals',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(() => {
            this.$swal(
              'Great!',
              'Animal added successfully!',
              'success'
            )
            // this.$router.push({ name: 'Home' })
            this.$refs.form.reset()
          })
          .catch(() => {
            this.$swal(
              'Oh no!',
              'Could not add the animal!',
              'error'
            )
          })
      }
      return true
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
