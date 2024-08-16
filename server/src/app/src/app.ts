import cors from 'cors'
import express from 'express'
import 'reflect-metadata'
import { createApolloServer } from '../../database'
import { listRouter } from '../../router'

export const runServer = async () => {
  const app = express()

  const PORT = process.env.PORT || 4000

  app.use(cors())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(
    express.static(__dirname + '/assets', {
      cacheControl: true,
      maxAge: 31536000000,
    })
  )
  app.use('/api/v1/pokemon', listRouter)
  await createApolloServer({ app })

  app.listen(PORT, () => {
    console.log(PORT)
    console.log('server running...')
    console.log('start!!!')
  })
}
