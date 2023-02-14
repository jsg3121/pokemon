import { makeObservable, observable } from 'mobx'
import { FilterStore } from './filter'

export class RootStore {
  @observable public filter: FilterStore

  constructor() {
    this.filter = new FilterStore()
    makeObservable(this)
  }
}
