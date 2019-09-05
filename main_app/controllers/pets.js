const PetSchema = require('../models/Pet.js')

module.exports.controller = (app) => {
  // fetch all movies
  
  /*
  app.get('/animals', (req, res) => {
    PetSchema.find({}, 'name age type gender', (error, pet) => {
      if (error) { console.log(error) }
      res.send({
        pet
      })
    })
  })
*/

  // add a new pet to the database
  app.post('/animals', (req, res) => {
    const newPet = new PetSchema({
      name: req.body.name,
      age: req.body.age,
      type: req.body.type,
      gender: req.body.gender
    })
    newPet.save((error, pet) => {
      if (error) { console.log(error) }
      res.send(pet)
    })
  })
}
