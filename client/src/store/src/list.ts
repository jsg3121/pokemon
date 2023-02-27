import { action, makeObservable, observable } from 'mobx'
import { Pokemon } from '../../graphql/inedex'

export class PokemonListStore {
  @observable public pokemon: Array<Pokemon> = []
  @observable public isLoading: boolean = true

  constructor() {
    makeObservable(this)
  }

  @action
  public setPokemonList(list: Array<Pokemon>) {
    this.pokemon = [...list]
  }

  @action
  public setLoading(loading: boolean) {
    this.isLoading = loading
  }
}
