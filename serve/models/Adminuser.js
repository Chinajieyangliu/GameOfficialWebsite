const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    select: false,
    type: String,
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    }
  }
})
module.exports = mongoose.model('Adminuser', schema)
