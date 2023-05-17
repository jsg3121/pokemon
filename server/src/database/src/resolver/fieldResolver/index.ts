import PokemonListFieldResolver from './src/Pokemon.fieldResolver'
import { BuildSchemaOptions } from 'type-graphql'
import { DetailFieldResover } from './src/Detail.fieldResolver'

export const FieldResolvers: BuildSchemaOptions['resolvers'] = [
  PokemonListFieldResolver,
  ...DetailFieldResover,
]
