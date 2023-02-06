import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

export const listRouter = Router()

const prisma = new PrismaClient()

listRouter.get('/list', async (req, res) => {
  res.send('asdf')
  res.end()
})

listRouter.post('/update', async (req, res) => {
  const dataList = await prisma.pokemon.findMany()

  try {
    dataList.map(async (data) => {
      return await prisma.pokemon.update({
        where: {
          number: data.number,
        },
        data: {
          type: data.typeSingle2
            ? [data.typeSingle1, data.typeSingle2]
            : [data.typeSingle1],
        },
      })
    })
    res.send('success')
  } catch (err) {
    res.send('fail')
  }
})
