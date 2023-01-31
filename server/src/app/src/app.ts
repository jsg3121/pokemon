import 'reflect-metadata'
import cors from 'cors'
import express from 'express'
import { listRouter } from '../../router'
import { createApolloServer } from '../../database'

export const runServer = async () => {
  const app = express()
  const PORT = process.env.PORT || 4000

  app.use(cors())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(express.static(__dirname + '/assets'))
  app.use('/api/v1/pokemon', listRouter)
  await createApolloServer({ app })

  app.listen(PORT, () => {
    console.log(PORT)
    console.log('server running...')
  })
}
