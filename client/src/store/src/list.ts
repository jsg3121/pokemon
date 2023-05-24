import { action, makeObservable, observable } from 'mobx'
import { NormalStats, Pokemon } from '../../graphql'

interface OrderByType extends Omit<NormalStats, '__typename' | 'pokemonId'> {
  number: Pokemon['number']
}

enum SortLabel {
  'number asc' = '도감번호 낮은순',
  'number desc' = '도감번호 높은순',
  'hp asc' = '체력 낮은순',
  'hp desc' = '체력 높은순',
  'attack asc' = '공격 낮은순',
  'attack desc' = '공격 높은순',
  'defense asc' = '방어 낮은순',
  'defense desc' = '방어 높은순',
  'specialAttack asc' = '특수공격 낮은순',
  'specialAttack desc' = '특수공격 높은순',
  'specialDefense asc' = '특수방어 낮은순',
  'specialDefense desc' = '특수방어 높은순',
  'speed asc' = '스피드 낮은순',
  'speed desc' = '스피드 높은순',
  'total asc' = '전체 종족값 낮은순',
  'total desc' = '전체 종족값 높은순',
}

export class PokemonListStore {
  @observable public pokemon: Array<Pokemon> = []
  @observable public stats: Array<NormalStats> = []
  @observable public isLoading: boolean = true
  @observable public nowSorting: string = '도감번호 낮은순'

  constructor() {
    makeObservable(this)
  }

  @action
  private sortASC(stat: keyof OrderByType) {
    const list = this.pokemon.sort((a, b) => {
      if (stat === 'number') {
        return a.number - b.number
      } else {
        return a.stats[`${stat}`] - b.stats[`${stat}`]
      }
    })
    this.pokemon = [...list]
    this.isLoading = false
  }

  @action
  private sortDESC(stat: keyof OrderByType) {
    const list = this.pokemon.sort((a, b) => {
      if (stat === 'number') {
        return b.number - a.number
      } else {
        return b.stats[`${stat}`] - a.stats[`${stat}`]
      }
    })
    this.pokemon = [...list]
    this.isLoading = false
  }

  @action
  public setPokemonList(list: Array<Pokemon>) {
    this.pokemon = [...list]
  }

  @action
  public setPokemonStats(stats: Array<NormalStats>) {
    this.stats = [...stats]
  }

  @action
  public setLoading(loading: boolean) {
    this.isLoading = loading
  }

  @action
  public sortPokemon(data: { name: string; value: string }) {
    this.isLoading = true
    const [name, order] = data.value.split(' ')
    this.nowSorting = SortLabel[data.value as keyof typeof SortLabel]

    if (order === 'asc') {
      this.sortASC(name as keyof OrderByType)
    } else {
      this.sortDESC(name as keyof OrderByType)
    }
  }
}
