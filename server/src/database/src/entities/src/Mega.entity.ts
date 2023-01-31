import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Mega {
  @Field(() => ID)
  public id: number

  @Field({
    nullable: false,
    description: '포켓몬 도감 번호',
    name: 'pokemon_id',
  })
  public pokemonId: number

  @Field({
    nullable: false,
    description: '포켓몬 도감 번호',
    name: 'pokemon_number',
  })
  public pokemonNumber: number

  @Field({
    nullable: false,
    description: '타입',
  })
  public type: number

  @Field({ nullable: false, description: '타입 1', name: 'type_single1' })
  typeSingle1: string

  @Field({ nullable: true, description: '타입 2', name: 'type_single2' })
  typeSingle2: string
}
