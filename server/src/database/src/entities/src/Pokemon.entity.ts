import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Pokemon {
  @Field(() => ID)
  public id: number

  @Field({
    nullable: false,
    description: '포켓몬 도감 번호',
    name: 'pokemon_number',
  })
  public pokemonNumber: number

  @Field({ nullable: false, description: '포켓몬 이름' })
  public name: string

  @Field({
    nullable: false,
    description: '리전폼 여부',
    name: 'is_region',
    defaultValue: false,
  })
  public isRegion: boolean

  @Field({
    nullable: false,
    description: '메가진화 여부',
    name: 'is_mega',
    defaultValue: false,
  })
  public isMega: boolean

  @Field({
    nullable: true,
    description: '진화체 존재 여부',
    name: 'is_evolutions',
  })
  public isEvolutions: boolean

  @Field({ nullable: false, description: '타입' })
  public type: Array<string>

  @Field({ nullable: false, description: '타입 1', name: 'type_single1' })
  public typeSingle1: string

  @Field({ nullable: true, description: '타입 2', name: 'type_single2' })
  public typeSingle2: string

  @Field({
    nullable: true,
    description: '진화 포켓몬 id',
    name: 'evolution_id',
  })
  public evolutionId: Array<number>

  @Field({ nullable: false, description: '세대 번호', name: 'generation_id' })
  public generationId: number
}
