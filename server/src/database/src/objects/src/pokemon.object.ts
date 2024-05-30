import { Field, ObjectType } from 'type-graphql'
import {
  PokemonAbilities,
  PokemonAbilityList,
  PokemonMega,
  PokemonMegaAbilityList,
  PokemonNormalFormAbilityList,
  PokemonRegionFormAbilityList,
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

@ObjectType('PokemonMegaInfoInfo')
export class PokemonMegaAbilityInfo
  implements
    Pick<PokemonAbilities, 'name' | 'description'>,
    Pick<PokemonMegaAbilityList, 'isHidden' | 'abilityId' | 'statCode'>
{
  @Field(() => String)
  public statCode: PokemonMegaAbilityList['statCode']

  @Field(() => String)
  public abilityId: PokemonMegaAbilityList['abilityId']

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

@ObjectType('PokemonRegionFormAbilityInfo')
export class PokemonRegionFormAbilityInfo
  implements
    Pick<PokemonAbilities, 'name' | 'description'>,
    Pick<PokemonRegionFormAbilityList, 'isHidden' | 'abilityId' | 'statCode'>
{
  @Field(() => String)
  public statCode: PokemonRegionFormAbilityList['statCode']

  @Field(() => String)
  public abilityId: PokemonRegionFormAbilityList['abilityId']

  @Field(() => String)
  public name: string

  @Field(() => String)
  public description: string

  @Field(() => Boolean)
  public isHidden: boolean
}
