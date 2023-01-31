import { BuildSchemaOptions } from 'type-graphql'
import PokemonResolver from './src/Pokemon.resolver'

const resolvers = [PokemonResolver]

export default resolvers as unknown as BuildSchemaOptions['resolvers']
