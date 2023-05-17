import { FieldResolver, Resolver, Root } from 'type-graphql'
import { NormalStats, Pokemon } from '../../../type-graphql'

@Resolver(Pokemon)
export default class PokemonFieldResolver {
  @FieldResolver(() => NormalStats, {
    name: 'stats',
    description: 'pokemonList fieldResover',
  })
  public async getPokemonFilter(@Root() pokemon: Pokemon) {
    return pokemon.NormalStats
  }
}
