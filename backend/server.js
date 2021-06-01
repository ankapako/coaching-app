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

const port = process.env.PORT || 8081
const app = express()

const exerciseSchema = new mongoose.Schema({
  name: String,
  targetMuscles: String,
  muscleGroup: String,
  category: String,
  instructions: String,
  img: String,
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

app.use(cors())
app.use(express.json())

// Endpoints
app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

app.get('/exercises', (req, res) => {
  Exercise.find().then((exercises) => {
    res.json({ data: exercises })
  })
})

// Search exercises by name and target muscle
app.get('/exercise', async (req, res) => {
  const { name, targetMuscle } = req.query

  const exercise = await Exercise.aggregate([
    {
      $match: {
        name: {
          $regex: new RegExp(name || "", "i")
        },
        target_muscle: {
          $regex: new RegExp(targetMuscle || "", "i")
        }
      }
    }
  ])
  res.json(exercise)
})

app.post('/exercises', async (req, res) => {
  try {
    const newExercise = await new Exercise(req.body).save()
    res.json(newExercise)
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
