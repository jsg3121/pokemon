import { BuildSchemaOptions } from 'type-graphql'
import { FieldResolvers } from './fieldResolver'
import PokemonResolver from './src/Pokemon.resolver'

const resolvers = [PokemonResolver, ...FieldResolvers]

export default resolvers as unknown as BuildSchemaOptions['resolvers']
