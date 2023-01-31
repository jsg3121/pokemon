import { Query, Resolver } from 'type-graphql'
import { Pokemon } from '../../entities'

@Resolver()
export default class PokemonResolver {
  @Query(() => [String])
  public async getList() {
    return ['1', '2']
  }
}
