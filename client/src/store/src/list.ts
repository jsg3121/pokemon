import { action, makeObservable, observable } from 'mobx'
import { Pokemon } from '../../graphql/inedex'

export class PokemonListStore {
  @observable public pokemon: Array<Pokemon> = []

  constructor() {
    makeObservable(this)
  }

  @action
  public setPokemonList(list: Array<Pokemon>) {
    this.pokemon = [...list]
  }
}
