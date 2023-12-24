const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
  origin: 'http://127.0.0.1:5173',
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routers
const router = require('./routes/taskRouter.js')
app.use('/api/tasks', router)


//port

const PORT = process.env.PORT || 5000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
