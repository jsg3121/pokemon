import { action, makeObservable, observable } from 'mobx'
import { NormalStats, Pokemon } from '../../graphql'

export class PokemonListStore {
  @observable public pokemon: Array<Pokemon> = []
  @observable public stats: Array<NormalStats> = []
  @observable public isLoading: boolean = true

  constructor() {
    makeObservable(this)
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
}
