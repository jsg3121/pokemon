import { FieldResolver, Resolver } from 'type-graphql'
import { Pokemon } from '../../../type-graphql'
import { PrismaClient } from '@prisma/client'
import { PokemonList } from '../../../object'

const prisma = new PrismaClient()

@Resolver((of) => PokemonList)
export default class PokemonFieldResolver {
  @FieldResolver()
  public async test(): Promise<Pokemon[]> {
    return await prisma.pokemon.findMany({})
  }
}
