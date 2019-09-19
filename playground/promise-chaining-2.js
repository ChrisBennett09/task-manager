require('../src/db/mongoose')
const Task = require('../src/models/task')

//Promise Chaining
// Task.findByIdAndDelete('5d68621eb60f740964f6bb4f').then((task) => {
//   console.log(task)
//   return Task.countDocuments({ completed: false })
// }).then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error)
// })


//Async Await
const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('5d686216b60f740964f6bb4e').then((count) => {
  console.log(count)
}).catch((error) => {
  console.log(error)
})
