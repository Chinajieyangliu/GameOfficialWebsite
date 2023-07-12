const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String },
  items: [
    {
      url: { type: String },
      image: { type: String }
    }
  ]
})
module.exports = mongoose.model('Advertisement', schema)
