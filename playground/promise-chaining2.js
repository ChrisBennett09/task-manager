require('../src/db/mongoose')
const User = require('../src/models/user')


// User.findByIdAndUpdate('5d6850845114ef0943f239a2', { age: 1}).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 1})
// }).then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error)
// })

//Async and Await
const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })
  return count
}

updateAgeAndCount('5d6850845114ef0943f239a2', 5).then((count) => {
  console.log(count)
}).catch((error) => {
  console.log(error)
})

