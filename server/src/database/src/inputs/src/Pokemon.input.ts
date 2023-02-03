import { Pokemon } from '@prisma/client'
import { Field, InputType, Int } from 'type-graphql'

@InputType('FilterData')
export class FilterData {
  @Field({ nullable: true })
  generate?: number

  // @Field(() => String)
  // public name: string | undefined

  // @Field(() => Boolean)
  // public evolution: boolean | undefined

  // @Field(() => [String] || undefined)
  // type?: Prisma.StringNullableListFilter | undefined
}
