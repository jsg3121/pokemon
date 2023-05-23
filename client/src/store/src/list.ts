import { action, makeObservable, observable } from 'mobx'
import { NormalStats, Pokemon } from '../../graphql'

interface OrderByType extends Omit<NormalStats, '__typename' | 'pokemonId'> {
  number: Pokemon['number']
}

export class PokemonListStore {
  @observable public pokemon: Array<Pokemon> = []
  @observable public stats: Array<NormalStats> = []
  @observable public isLoading: boolean = true

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

    if (order === 'asc') {
      this.sortASC(name as keyof OrderByType)
    } else {
      this.sortDESC(name as keyof OrderByType)
    }
  }
}
