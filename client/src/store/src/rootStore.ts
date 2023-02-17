import { makeObservable, observable } from 'mobx'
import { FilterStore } from './filter'
import { PokemonListStore } from './list'

export class RootStore {
  @observable public filter: FilterStore
  @observable public pokemonList: PokemonListStore

  constructor() {
    this.filter = new FilterStore()
    this.pokemonList = new PokemonListStore()
    makeObservable(this)
  }
}
