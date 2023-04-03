import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

export const listRouter = Router()

const prisma = new PrismaClient()

listRouter.get('/list', async (req, res) => {
  res.send('asdf')
  res.end()
})

listRouter.post('/update', async (req, res) => {
  const dataList = await prisma.pokemon.findMany({
    where: {
      generation: req.body.generation,
    },
  })

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
    res.send({
      response: 'success',
      data: [...dataList],
    })
  } catch (err) {
    res.send('fail')
  }
  res.end()
})

listRouter.post('/update/region', async (req, res) => {
  const dataList = await prisma.pokemonRegion.findMany()

  try {
    dataList.map(async (data) => {
      return await prisma.pokemonRegion.update({
        where: {
          id: data.id,
        },
        data: {
          type: data.typeSingle2
            ? [data.typeSingle1, data.typeSingle2]
            : [data.typeSingle1],
        },
      })
    })
    res.send({
      response: 'success',
      data: [...dataList],
    })
  } catch (err) {
    res.send('fail')
  }
  res.end()
})

listRouter.post('/update/mega', async (req, res) => {
  const dataList = await prisma.pokemonMega.findMany()

  try {
    dataList.map(async (data) => {
      return await prisma.pokemonMega.update({
        where: {
          id: data.id,
        },
        data: {
          type: data.typeSingle2
            ? [data.typeSingle1, data.typeSingle2]
            : [data.typeSingle1],
        },
      })
    })
    res.send({
      response: 'success',
      data: [...dataList],
    })
  } catch (err) {
    res.send('fail')
  }
  res.end()
})
