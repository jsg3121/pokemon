import { Field, ObjectType } from 'type-graphql'
import {
  PokemonAbilities,
  PokemonAbilityList,
  PokemonNormalFormAbilityList,
} from '../../type-graphql'

@ObjectType('PokemonAbiltyInfo')
export class PokemonAbiltyInfo
  implements
    Pick<PokemonAbilities, 'name' | 'description'>,
    Pick<PokemonAbilityList, 'isHidden' | 'abilityId' | 'pokemonId'>
{
  @Field(() => String)
  public pokemonId: PokemonAbilityList['pokemonId']

  @Field(() => String)
  public abilityId: PokemonAbilityList['abilityId']

  @Field(() => String)
  public name: string

  @Field(() => String)
  public description: string

  @Field(() => Boolean)
  public isHidden: boolean
}

@ObjectType('PokemonNormalFormAbilityInfo')
export class PokemonNormalFormAbilityInfo
  implements
    Pick<PokemonAbilities, 'name' | 'description'>,
    Pick<PokemonNormalFormAbilityList, 'isHidden' | 'abilityId' | 'statCode'>
{
  @Field(() => String)
  public statCode: PokemonNormalFormAbilityList['statCode']

  @Field(() => String)
  public abilityId: PokemonNormalFormAbilityList['abilityId']

  @Field(() => String)
  public name: string

  @Field(() => String)
  public description: string

  @Field(() => Boolean)
  public isHidden: boolean
}
