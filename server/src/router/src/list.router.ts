import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import http from 'axios'
import fs from 'fs'

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

// listRouter.get('/get/stat', async (req, res) => {
//   const data = []

//   for (let i = 1; i <= 1010; i++) {
//     await http
//       .request({
//         url: `https://pokeapi.co/api/v2/pokemon/${i}`,
//         method: 'GET',
//       })
//       .then((res) => {
//         const stats = res.data.stats

//         const statInfo = []

//         for (let j = 0; j < stats.length; j++) {
//           const form = {
//             statName: res.data.stats[j].stat.name,
//             statPoint: res.data.stats[j].base_stat,
//           }
//           statInfo.push(form)
//         }
//         data.push(statInfo)
//       })
//     if (i % 100 === 0) {
//       console.log(`insert ${i}.....`)
//     }
//   }

//   fs.writeFileSync('./stats.json', JSON.stringify(data))

//   res.send(data)
//   res.end()
// })
