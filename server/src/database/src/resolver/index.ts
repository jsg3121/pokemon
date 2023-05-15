import { BuildSchemaOptions } from 'type-graphql'
import { PokemonListFieldResolver } from './fieldResolver'
import PokemonResolver from './src/Pokemon.resolver'

const resolvers = [PokemonResolver, PokemonListFieldResolver]

export default resolvers as unknown as BuildSchemaOptions['resolvers']
