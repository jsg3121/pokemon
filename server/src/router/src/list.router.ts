import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import gen9Form from '../../../json/pokemon_gen9_dlc_form.json'

const prisma = new PrismaClient()

export const listRouter = Router()

/**
 *
 * 일반 기본 형태 포켓몬 추가 api
 *
 */
// listRouter.post('/update/add/pokemon', async (req, res) => {
//   try {
//     gen9.forEach(async (item) => {
//       await prisma.pokemon.create({
//         data: {
//           id: item.number,
//           name: item.name,
//           number: item.number,
//           isEvolution: item.is_evolution ?? false,
//           evolutionId: item.evolution_id,
//           type: item.type,
//           typeSingle1: item.type_single1,
//           typeSingle2: item.type_single2,
//           generation: 9,
//           abilityId: item.ability_id,
//         },
//       })
//     })

//     res.send({
//       response: '9세대 확장 추가 성공',
//     })
//   } catch (err) {
//     res.send('fail')
//   }
//   res.end()
// })

// listRouter.post('/update/add/pokemonAbility', async (req, res) => {
//   try {
//     gen9Abilities.forEach(async (item, index) => {
//       await prisma.pokemonAbilityList.create({
//         data: {
//           id: index + 2451,
//           abilityId: item.ability_id,
//           isHidden: item.is_hidden,
//           pokemonId: item.pokemon_id,
//         },
//       })
//     })

//     res.send({
//       response: '9세대 확장 특성 추가 성공',
//     })
//   } catch (err) {
//     res.send('fail')
//   }
//   res.end()
// })

// listRouter.post('/update/add/stats', async (req, res) => {
//   try {
//     gen9Stats.forEach(async (item, index) => {
//       await prisma.normalStats.create({
//         data: {
//           id: index + 1012,
//           attack: item.attack,
//           hp: item.hp,
//           defense: item.defense,
//           specialAttack: item['special-attack'],
//           specialDefense: item['special-defense'],
//           speed: item.speed,
//           total: item.total,
//           pokemonId: item.number,
//         },
//       })
//     })

//     res.send({
//       response: '9세대 확장 스텟 추가 성공',
//     })
//   } catch (err) {
//     res.send('fail')
//   }
//   res.end()
// })
// 일반 기본 형태 포켓몬 추가 api 끝

/**
 *
 * 노말 폼 형태 포켓몬 추가 api
 *
 */
listRouter.post('/update/add/formPokemon', async (req, res) => {
  try {
    const formList = await prisma.pokemonNormalForm.count()

    gen9Form.forEach(async (item, index) => {
      await prisma.pokemonNormalForm.create({
        data: {
          id: 311 + index,
          imagePath: `1024_${index}`,
          name: item.formName,
          statCode: `F1024${formList + index + 1}`,
          type: item.types,
          typeSingle1: item.types[0],
          typeSingle2: item.types[1] ?? null,
          abilityId: item.abilities,
          pokemonId: 1017,
        },
      })
    })

    res.send({
      response: '9세대 확장 노말폼 추가 완료',
    })
  } catch (err) {
    res.send('fail')
  }
  res.end()
})

listRouter.post('/update/add/formPokemonAbility', async (req, res) => {
  try {
    gen9Form.forEach(async (item, index) => {
      await prisma.pokemonNormalFormAbilityList.create({
        data: {
          id: index + 426,
          abilityId: item.abilities,
          isHidden: false,
          statCode: 'F1024269',
        },
      })
    })

    res.send({
      response: '9세대 확장 특성 추가 성공',
    })
  } catch (err) {
    res.send('fail')
  }
  res.end()
})

listRouter.post('/update/add/formPokemonStat', async (req, res) => {
  try {
    gen9Form.forEach(async (item, index) => {
      await prisma.formStats.create({
        data: {
          id: index + 88,
          statCode: 'F1024269',
          attack: item.stats.attack,
          defense: item.stats.defense,
          hp: item.stats.hp,
          specialAttack: item.stats['special-attack'],
          specialDefense: item.stats['special-defense'],
          speed: item.stats.speed,
          total: item.stats.total,
        },
      })
    })

    res.send({
      response: '9세대 확장 노말폼 스텟 추가 완료',
    })
  } catch (err) {
    res.send('fail')
  }
  res.end()
})

// listRouter.get('/get/stat', async (req, res) => {
//   const data = []

//   const cnt = 35
//   const startNumb = 10229

//   for (let i = 0; i < cnt; i++) {
//     await http
//       .request({
//         url: `https://pokeapi.co/api/v2/pokemon/${i + startNumb}`,
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
//     console.log(`insert ${i}.....`)
//   }

//   console.log('format list...')

//   const list = data.map((statInfo, index) => {
//     return {
//       number: index + startNumb,
//       [`${statInfo[0].statName}`]: statInfo[0].statPoint,
//       [`${statInfo[1].statName}`]: statInfo[1].statPoint,
//       [`${statInfo[2].statName}`]: statInfo[2].statPoint,
//       [`${statInfo[3].statName}`]: statInfo[3].statPoint,
//       [`${statInfo[4].statName}`]: statInfo[4].statPoint,
//       [`${statInfo[5].statName}`]: statInfo[5].statPoint,
//       total:
//         statInfo[0].statPoint +
//         statInfo[1].statPoint +
//         statInfo[2].statPoint +
//         statInfo[3].statPoint +
//         statInfo[4].statPoint +
//         statInfo[5].statPoint,
//     }
//   })

//   fs.writeFileSync('./json/stats_gen9.json', JSON.stringify(list))

//   res.send(list)

//   console.log('list info')
//   console.log(list.length)
//   console.log('success! ')

//   res.end()
// })

// listRouter.post('/change/db', async (req, res) => {
//   try {
//     const data = await prisma.pokemonNormalForm
//       .findMany({
//         orderBy: {
//           id: 'asc',
//         },
//       })
//       .then((res) => {
//         return res.map((item) => {
//           return {
//             id: item.id,
//             number: item.pokemonId,
//           }
//         })
//       })

//     const list = []

//     data.forEach(async (item, index) => {
//       if (index > 150) {
//         const str = `M${item.number.toString().padStart(4, '0')}${(index + 1)
//           .toString()
//           .padStart(3, '0')}`
//         list.push(
//           await prisma.pokemonNormalForm.update({
//             where: {
//               id: item.id,
//             },
//             data: {
//               statCode: `${str}`,
//             },
//           })
//         )
//       }
//     })

//     await Promise.all(list).then(() => {
//       res.send(data)
//     })
//   } catch (error) {
//     console.log(error)
//   }
//   res.end()
// })

// listRouter.get('/get/info', async (req, res) => {
//   const data = []

//   const cnt = 15
//   const startNumb = 1011

//   for (let i = 0; i < cnt; i++) {
//     await http
//       .request({
//         url: `https://pokeapi.co/api/v2/pokemon/${i + startNumb}`,
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
//     console.log(`insert ${i}.....`)
//   }

//   console.log('format list...')

//   const list = data.map((statInfo, index) => {
//     return {
//       number: index + startNumb,
//       [`${statInfo[0].statName}`]: statInfo[0].statPoint,
//       [`${statInfo[1].statName}`]: statInfo[1].statPoint,
//       [`${statInfo[2].statName}`]: statInfo[2].statPoint,
//       [`${statInfo[3].statName}`]: statInfo[3].statPoint,
//       [`${statInfo[4].statName}`]: statInfo[4].statPoint,
//       [`${statInfo[5].statName}`]: statInfo[5].statPoint,
//       total:
//         statInfo[0].statPoint +
//         statInfo[1].statPoint +
//         statInfo[2].statPoint +
//         statInfo[3].statPoint +
//         statInfo[4].statPoint +
//         statInfo[5].statPoint,
//     }
//   })

//   fs.writeFileSync('./json/stats_gen9_dlc_stats.json', JSON.stringify(list))

//   res.send(list)

//   console.log('list info')
//   console.log(list.length)
//   console.log('success! ')

//   res.end()
// })

// listRouter.post('/change/ability', async (req, res) => {
//   try {
//     const data = await prisma.pokemon.findMany()
//     console.log('get pokemon complete')
//     data.forEach(async (pokemon) => {
//       const ids = [
//         ...new Set(
//           abilityList.data.pokemon_v2_pokemon[
//             pokemon.id - 1
//           ].pokemon_v2_pokemonabilities.map((item) => item.ability_id)
//         ),
//       ]

//       if (pokemon.id % 100 === 0) {
//         console.log(`...${pokemon.id} complate`)
//       }
//       await prisma.pokemon.update({
//         where: {
//           id: pokemon.id,
//         },
//         data: {
//           abilityId: ids,
//         },
//       })
//     })
//     res.send(abilityList.data.pokemon_v2_pokemon)
//   } catch (error) {
//     console.log(error)
//   }
//   res.end()
// })

// listRouter.post('/change/ability/detail', async (req, res) => {
//   try {
//     const data = await prisma.pokemon.findMany()
//     console.log('get pokemon complete')

//     data.forEach(async (pokemon) => {
//       pokemon.abilityId.forEach(async (ability, index) => {
//         const pokemonId = pokemon.id

//         const isHidden =
//           abilityList.data.pokemon_v2_pokemon[pokemon.number - 1]
//             .pokemon_v2_pokemonabilities[index].is_hidden

//         await prisma.pokemonAbilityList.create({
//           data: {
//             pokemonId,
//             abilityId: ability,
//             isHidden,
//           },
//         })
//       })
//     })

//     res.send('finish')
//   } catch (error) {
//     console.log(error)
//   }
//   res.end()
// })

// listRouter.post('/change/ability/list', async (req, res) => {
//   try {
//     abilityName.data.pokemon_v2_ability.forEach(async (ability, index) => {
//       const name = ability.pokemon_v2_abilitynames[0].name
//       const description =
//         abilityDescription.data.pokemon_v2_ability[index]
//           .pokemon_v2_abilityflavortexts[0].flavor_text

//       await prisma.pokemonAbilities.create({
//         data: {
//           abilityId: ability.id,
//           name,
//           description,
//         },
//       })
//     })
//     res.send('finish')
//   } catch (error) {
//     console.log(error)
//   }
//   res.end()
// })

// listRouter.post('/change/ability/mega', async (req, res) => {
//   try {
//     const data = megaAbilityList.pokemon_v2_pokemon.map((pokemon, index) => {
//       const pokemonName =
//         pokemon.pokemon_v2_pokemonforms[0].pokemon_v2_pokemonformnames[0].name
//       const pokemonNumber = pokemon.pokemon_species_id
//       const abilityId =
//         pokemon.pokemon_v2_pokemonforms[0].pokemon_v2_pokemon
//           .pokemon_v2_pokemonabilities[0].pokemon_v2_ability.id

//       return {
//         abilityId,
//         pokemonName,
//         pokemonNumber,
//       }
//     })

//     data
//       .sort(
//         (
//           { pokemonNumber: pokemonNumberA },
//           { pokemonNumber: pokemonNumberB }
//         ) => pokemonNumberA - pokemonNumberB
//       )
//       .forEach(async (info, index) => {
//         await prisma.pokemonMega.update({
//           where: {
//             id: index + 1,
//           },
//           data: {
//             abilityId: info.abilityId,
//             name: info.pokemonName,
//           },
//         })
//       })

//     res.send('finish')
//   } catch (error) {
//     console.log(error)
//   }
//   res.end()
// })

// listRouter.post('/change/ability/forms', async (req, res) => {
//   try {
//     const data =
//       formAbilityList.pokemon_v2_language[0].pokemon_v2_pokemonformnames.forEach(
//         (info) => {
//           const infoList =
//             info.pokemon_v2_pokemonform.pokemon_v2_pokemon.pokemon_v2_pokemonabilities.map(
//               (ability) => {
//                 return {
//                   isHidden: ability.is_hidden,
//                   abilityId: ability.ability_id,
//                 }
//               }
//             )

//           return {
//             formName: info.name,
//             pokemonId:
//               info.pokemon_v2_pokemonform.pokemon_v2_pokemon.pokemon_species_id,
//           }
//         }
//       )

//     res.send('finish')
//   } catch (error) {
//     console.log(error)
//   }
//   res.end()
// })
