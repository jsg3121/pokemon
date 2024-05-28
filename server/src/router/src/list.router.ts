import { PrismaClient } from '@prisma/client'
import http from 'axios'
import { Router } from 'express'
import fs from 'fs'
import { getTime } from '../../common'

import abilityList from '../../../json/pokemon_ability_list.json'
import abilityName from '../../../json/pokemon_ability_name.json'
import abilityDescription from '../../../json/pokemon_ability_description.json'
import megaAbilityList from '../../../json/pokemon_mega_ablility.json'

const prisma = new PrismaClient()

export const listRouter = Router()

export const resetCount = async () => {
  const date = getTime()

  const { todayCount } = await prisma.useCount.findFirst({
    where: {
      id: 1,
    },
  })

  await prisma.visitLog.create({
    data: {
      visitCount: todayCount,
      logDate: date,
    },
  })

  await prisma.useCount.update({
    where: {
      id: 1,
    },
    data: {
      todayCount: 0,
    },
  })
  console.log(
    new Date().toLocaleString('ko-KR', {
      timeZone: 'Asia/Seoul',
    })
  )
  console.log(`today count reset`)
}

listRouter.post('/count', async (req, res) => {
  const { todayCount, totalCount } = await prisma.useCount.findFirst({
    where: {
      id: 1,
    },
  })

  await prisma.useCount.update({
    where: {
      id: 1,
    },
    data: {
      todayCount: todayCount + 1,
      totalCount: totalCount + 1,
    },
  })

  res.send()
  res.end()
})

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

  const cnt = 35
  const startNumb = 10229

  for (let i = 0; i < cnt; i++) {
    await http
      .request({
        url: `https://pokeapi.co/api/v2/pokemon/${i + startNumb}`,
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
      })
    console.log(`insert ${i}.....`)
  }

  console.log('format list...')

  const list = data.map((statInfo, index) => {
    return {
      number: index + startNumb,
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

  fs.writeFileSync('./json/stats_gen9.json', JSON.stringify(list))

  res.send(list)

  console.log('list info')
  console.log(list.length)
  console.log('success! ')

  res.end()
})

listRouter.post('/change/db', async (req, res) => {
  try {
    const data = await prisma.pokemonNormalForm
      .findMany({
        orderBy: {
          id: 'asc',
        },
      })
      .then((res) => {
        return res.map((item) => {
          return {
            id: item.id,
            number: item.pokemonId,
          }
        })
      })

    const list = []

    data.forEach(async (item, index) => {
      if (index > 150) {
        const str = `M${item.number.toString().padStart(4, '0')}${(index + 1)
          .toString()
          .padStart(3, '0')}`
        list.push(
          await prisma.pokemonNormalForm.update({
            where: {
              id: item.id,
            },
            data: {
              statCode: `${str}`,
            },
          })
        )
      }
    })

    await Promise.all(list).then(() => {
      res.send(data)
    })
  } catch (error) {
    console.log(error)
  }
  res.end()
})

listRouter.get('/get/info', async (req, res) => {
  const data = []

  const cnt = 35
  const startNumb = 10229

  for (let i = 0; i < cnt; i++) {
    await http
      .request({
        url: `https://pokeapi.co/api/v2/pokemon/${i + startNumb}`,
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
      })
    console.log(`insert ${i}.....`)
  }

  console.log('format list...')

  const list = data.map((statInfo, index) => {
    return {
      number: index + startNumb,
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

  fs.writeFileSync('./json/stats_gen9.json', JSON.stringify(list))

  res.send(list)

  console.log('list info')
  console.log(list.length)
  console.log('success! ')

  res.end()
})

listRouter.post('/change/ability', async (req, res) => {
  try {
    const data = await prisma.pokemon.findMany()
    console.log('get pokemon complete')
    data.forEach(async (pokemon) => {
      const ids = [
        ...new Set(
          abilityList.data.pokemon_v2_pokemon[
            pokemon.id - 1
          ].pokemon_v2_pokemonabilities.map((item) => item.ability_id)
        ),
      ]

      if (pokemon.id % 100 === 0) {
        console.log(`...${pokemon.id} complate`)
      }
      await prisma.pokemon.update({
        where: {
          id: pokemon.id,
        },
        data: {
          abilityId: ids,
        },
      })
    })
    res.send(abilityList.data.pokemon_v2_pokemon)
  } catch (error) {
    console.log(error)
  }
  res.end()
})

listRouter.post('/change/ability/detail', async (req, res) => {
  try {
    const data = await prisma.pokemon.findMany()
    console.log('get pokemon complete')

    data.forEach(async (pokemon) => {
      pokemon.abilityId.forEach(async (ability, index) => {
        const pokemonId = pokemon.id

        const isHidden =
          abilityList.data.pokemon_v2_pokemon[pokemon.number - 1]
            .pokemon_v2_pokemonabilities[index].is_hidden

        await prisma.pokemonAbilityList.create({
          data: {
            pokemonId,
            abilityId: ability,
            isHidden,
          },
        })
      })
    })

    res.send('finish')
  } catch (error) {
    console.log(error)
  }
  res.end()
})

listRouter.post('/change/ability/list', async (req, res) => {
  try {
    abilityName.data.pokemon_v2_ability.forEach(async (ability, index) => {
      const name = ability.pokemon_v2_abilitynames[0].name
      const description =
        abilityDescription.data.pokemon_v2_ability[index]
          .pokemon_v2_abilityflavortexts[0].flavor_text

      await prisma.pokemonAbilities.create({
        data: {
          abilityId: ability.id,
          name,
          description,
        },
      })
    })
    res.send('finish')
  } catch (error) {
    console.log(error)
  }
  res.end()
})

listRouter.post('/change/ability/mega', async (req, res) => {
  try {
    megaAbilityList.pokemon_v2_pokemon.forEach(async (pokemon, index) => {
      const pokemonName =
        pokemon.pokemon_v2_pokemonforms[0].pokemon_v2_pokemonformnames[0].name
      const abilityId =
        pokemon.pokemon_v2_pokemonforms[0].pokemon_v2_pokemon
          .pokemon_v2_pokemonabilities[0].pokemon_v2_ability.id

      await prisma.pokemonMega.update({
        where: {
          id: index + 4,
        },
        data: {
          name: pokemonName,
          abilityId,
        },
      })
    })

    res.send('finish')
  } catch (error) {
    console.log(error)
  }
  res.end()
})
