import cors from 'cors'
import express from 'express'

export const runServer = () => {
  const app = express()
  const PORT = process.env.PORT || 4000

  app.use(cors())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.listen(PORT, () => {
    console.log(PORT)
    console.log('server running...')
  })
}
