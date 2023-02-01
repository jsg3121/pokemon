import { PrismaClient } from '@prisma/client'
import { Query, Resolver } from 'type-graphql'
import { Pokemon } from '../../../type-graphql'

const prisma = new PrismaClient()

@Resolver()
export default class PokemonResolver {
  @Query(() => [Pokemon])
  public async getList() {
    return prisma.pokemon.findMany()
  }
}
