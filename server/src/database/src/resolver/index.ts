import { BuildSchemaOptions } from 'type-graphql'
import PokemonResolver from './src/Pokemon.resolver'
import { FieldResolver } from './fieldResolver'

const resolvers = [PokemonResolver, ...FieldResolver]

export default resolvers as unknown as BuildSchemaOptions['resolvers']
