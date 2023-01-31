import { Router } from 'express'

export const listRouter = Router()

listRouter.get('/list', async (req, res) => {
  res.send('asdf')
  res.end()
})
