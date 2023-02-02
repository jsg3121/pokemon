import { Prisma } from '@prisma/client'
import { Field, InputType, Int } from 'type-graphql'
import { Pokemon } from '../../type-graphql'

@InputType('FilterData')
export class FilterData {
  @Field(() => Int)
  generate?: number | undefined

  @Field(() => String)
  name?: string | undefined

  @Field(() => Boolean)
  evolution?: boolean | undefined

  @Field(() => [String])
  type?: Prisma.StringNullableListFilter | undefined
}
