import { BuildSchemaOptions } from 'type-graphql'
import PokemonListFieldResolver from './src/Pokemon.fieldResolver'

export const FieldResolver: BuildSchemaOptions['resolvers'] = [
  PokemonListFieldResolver,
]
