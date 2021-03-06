import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import listEndpoints from 'express-list-endpoints'
import dotenv from 'dotenv'

dotenv.config()

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/exercise'
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
mongoose.Promise = Promise

const port = process.env.PORT || 8082
const app = express()

const exerciseSchema = new mongoose.Schema({
  name: String,
  targetMuscles: String,
  muscleGroup: String,
  category: String,
  instructions: String,
  img: String,
  sets: Number,
  reps: Number,
  load: String,
  rest: String,
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

const programSchema = new mongoose.Schema({
  name: String,
  workout: [exerciseSchema],
})

const Program = mongoose.model('Program', programSchema)

const workoutSchema = new mongoose.Schema({
  name: String,
  workout: [
    {
      week: {
        week: Number,
        program: [programSchema],
        other: [{ workoutType: String, instructions: String }],
      },
    },
  ],
})

const Workout = mongoose.model('Workout', workoutSchema)

const todoSchema = new mongoose.Schema({
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
  important: Number,
})

const Todo = mongoose.model('Todo', todoSchema)

app.use(cors())
app.use(express.json())

// Endpoints
app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

app.get('/exercises', async (req, res) => {
  const exercises = await Exercise.find()
  res.json({ data: exercises })
})

app.get('/programs', async (req, res) => {
  const programs = await Program.find()
  res.json(programs)
})

app.get('/workouts', async (req, res) => {
  const workouts = await Workout.find()
  res.json(workouts)
})

app.get('/todos', async (req, res) => {
  const todos = await Todo.find()
  res.json(todos)
})

// Search exercises by name and target muscle
app.get('/exercise', async (req, res) => {
  const { name } = req.query

  const exercise = await Exercise.aggregate([
    {
      $match: {
        name: {
          $regex: new RegExp(name || '', 'i'),
        },
      },
    },
  ])
  res.json(exercise)
})

app.get('/programs/name/:name', async (req, res) => {
  const { name } = req.params

  try {
    const singleProgram = await Program.findOne({ name: name })
    if (singleProgram) {
      res.json({ data: singleProgram })
    } else {
      res.status(404).json({ error: 'Program not found' })
    }
  } catch (error) {
    res.status(400).json({ error: 'something went wrong', details: error })
  }
})

app.get('/todos/:id', async (req, res) => {
  const { id } = req.params

  try {
    const singleTodo = await Todo.findById({ _id: id })
    if (singleTodo) {
      res.json(singleTodo)
    } else {
      res.status(404).json({ error: 'todo not found' })
    }
  } catch (error) {
    res.status(400).json({ error: 'something went wrong', details: error })
  }
})

app.post('/exercises', async (req, res) => {
  try {
    const newExercise = await new Exercise(req.body).save()

    res.json(newExercise)
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error })
  }
})

app.post('/programs', async (req, res) => {
  try {
    const newProgram = await new Program(req.body).save()
    res.json(newProgram)
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error })
  }
})

app.post('/workouts', async (req, res) => {
  try {
    const newWorkout = await new Workout(req.body).save()
    res.json(newWorkout)
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error })
  }
})

app.post('/todos', async (req, res) => {
  try {
    const newTodo = await new Todo(req.body).save()
    res.json(newTodo)
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error })
  }
})

app.delete('/exercises/:id', async (req, res) => {
  const { id } = req.params

  try {
    const deletedExercise = await Exercise.findOneAndDelete({ _id: id })
    if (deletedExercise) {
      res.json(deletedExercise)
    } else {
      res.status(404).json({ message: 'Not found' })
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error })
  }
})

app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params

  try {
    const deletedTodo = await Todo.findOneAndDelete({ _id: id })
    if (deletedTodo) {
      res.json(deletedTodo)
    } else {
      res.status(404).json({ message: 'Not found' })
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
