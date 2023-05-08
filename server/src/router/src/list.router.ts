import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import http from 'axios'
import fs from 'fs'
import stats_mega from '../../../json/stats_mega.json'

export const listRouter = Router()

const prisma = new PrismaClient()

listRouter.get('/list', async (req, res) => {
  res.send('asdf')
  res.end()
})

listRouter.post('/update', async (req, res) => {
  const dataList = await prisma.pokemon.findMany({
    where: {
      generation: {
        equals: parseInt(req.body.generation, 10),
      },
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

listRouter.post('/update/normalForm', async (req, res) => {
  const dataList = await prisma.pokemonNormalForm.findMany()

  try {
    dataList.map(async (data) => {
      return await prisma.pokemonNormalForm.update({
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

listRouter.get('/get/stat', async (req, res) => {
  const data = []

  for (let i = 1; i <= 58; i++) {
    await http
      .request({
        url: `https://pokeapi.co/api/v2/pokemon/${i + 10032}`,
        method: 'GET',
      })
      .then((res) => {
        const stats = res.data.stats

        const statInfo = []

        for (let j = 0; j < stats.length; j++) {
          const form = {
            statName: res.data.stats[j].stat.name,
            statPoint: res.data.stats[j].base_stat,
          }
          statInfo.push(form)
        }
        data.push(statInfo)
        console.log(statInfo)
      })
    console.log(`insert ${i}.....`)
  }

  fs.writeFileSync('./json/stats_mega.json', JSON.stringify(data, null, 2))

  res.send(data)
  console.log('success! ')

  res.end()
})

listRouter.get('/get/stats_mega', async (req, res) => {
  const list = stats_mega.map((statInfo, index) => {
    return {
      number: index + 10033,
      [`${statInfo[0].statName}`]: statInfo[0].statPoint,
      [`${statInfo[1].statName}`]: statInfo[1].statPoint,
      [`${statInfo[2].statName}`]: statInfo[2].statPoint,
      [`${statInfo[3].statName}`]: statInfo[3].statPoint,
      [`${statInfo[4].statName}`]: statInfo[4].statPoint,
      [`${statInfo[5].statName}`]: statInfo[5].statPoint,
      total:
        statInfo[0].statPoint +
        statInfo[1].statPoint +
        statInfo[2].statPoint +
        statInfo[3].statPoint +
        statInfo[4].statPoint +
        statInfo[5].statPoint,
    }
  })

  res.send(list)
  res.end()
})
