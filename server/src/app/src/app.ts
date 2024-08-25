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
  app.use((req, res, next) => {
    // 프록시를 거치지 않은 경우 단순히 req.ip를 사용
    const ip = req.ip

    // 프록시를 거치는 환경일 경우, x-forwarded-for 헤더에서 IP를 추출
    const forwardedIp = req.headers['x-forwarded-for'] || ip

    console.log('Request Client IP:', forwardedIp)
    next()
  })

  app.use('/api/v1/pokemon', listRouter)
  await createApolloServer({ app })

  app.listen(PORT, () => {
    console.log(PORT)
    console.log('server running...')
    console.log('start!!!')
  })
}
