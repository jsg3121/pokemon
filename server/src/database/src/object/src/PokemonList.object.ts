import { Field, Int, ObjectType } from 'type-graphql'
import {
  NormalStats,
  Pokemon,
  PokemonCount,
  PokemonMega,
  PokemonNormalForm,
  PokemonRegion,
} from '../../type-graphql'

type PokemoListObjectType = Omit<
  Pokemon,
  'PokemonRegion' | 'PokemonMega' | 'PokemonNormalForm' | '_count'
>

@ObjectType('PokemonList')
export default class PokemonList implements PokemoListObjectType {
  @Field(() => Int)
  public number: number

  @Field(() => String)
  public id: number

  @Field(() => String)
  public name: string

  @Field(() => String)
  public type: string[]

  @Field(() => Boolean)
  public isRegion?: boolean

  @Field(() => Boolean)
  public isMega?: boolean

  @Field(() => String)
  public typeSingle1: string

  @Field(() => String)
  public typeSingle2?: string

  @Field(() => Boolean)
  public isEvolution: boolean

  @Field(() => Int)
  public evolutionId: number[]

  @Field(() => Int)
  public generation: number

  @Field(() => Boolean)
  public isForm: boolean

  @Field(() => [NormalStats])
  public NormalStats: NormalStats[]
}
