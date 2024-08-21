const express = require('express')
require('./db/mongoose.js')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/tasks.js')

const app = express();
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


// Multer(For uploading files)
// const multer = require('multer')
// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 2000000
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error('Please upload a Word document'))
//     } 

//     cb(undefined, true)
//   }
// })


// app.post('/upload', upload.single('upload'), (req, res) => {
//   res.send()
// }, (error, req, res, next) => {
//   res.status(400).send({error: error.message})
// })


// Express Middleware (We can limit what a user have access to)
// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next();
//   }
// })
// app.use((req, res, next) => {
//   res.status(503).send('Site is in maintenance mode')
// })



// Populate
// const Task = require('./models/task.js')
// const User = require('./models/user.js')

// const main = async () => {
//   // const task = await Task.findById('66c06d5d306398c9fd0d32b0')
//   // await task.populate('owner')
//   // console.log(task.owner)

//   const user = await User.findById('66c06c6e2fc6f9a18c7bd3b8')
//   await user.populate('tasks')
//   console.log(user.tasks)

// }

// main()



app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
