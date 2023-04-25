import { action, makeObservable, observable } from 'mobx'

export class FilterStore {
  @observable public name: string = ''
  @observable public type: Array<string> = []
  @observable public generation: Array<string> = []
  @observable public isMega: string | undefined = undefined
  @observable public isRegion: string | undefined = undefined
  @observable public isEvolution: string | undefined = undefined
  @observable public keyword: string | undefined = undefined
  @observable private isSave: boolean = true

  constructor() {
    if (this.isSave) {
      const filters = window.localStorage.getItem('filters')
      if (filters) {
        const items = JSON.parse(filters)
        this.name = items.name
        this.type = items.type
        this.generation = items.generation
        this.isMega = items.isMega
        this.isRegion = items.isRegion
        this.isEvolution = items.isEvolution
        this.keyword = items.keyword
      }
    }

    makeObservable(this)
  }

  @action
  public changeFilter(data: { type: keyof FilterStore; value: string }) {
    const { type, value } = data

    switch (type) {
      case 'type':
        if (this.type.indexOf(value) === -1) {
          this.type = [...this.type, value]
        } else {
          const index = this.type.indexOf(value)
          const cut = [...this.type]
          cut.splice(index, 1)
          this.type = [...cut]
        }
        return
      case 'name':
        this.name = value
        return
      case 'generation':
        if (this.generation.indexOf(value) === -1) {
          this.generation = [...this.generation, value]
        } else {
          const index = this.generation.indexOf(value)
          const cut = [...this.generation]
          cut.splice(index, 1)
          this.generation = cut
        }
        return

      case 'isEvolution':
      case 'isMega':
      case 'isRegion':
        this[`${type}`] = value
        return
    }
  }

  @action
  public clear() {
    this.generation = []
    this.isEvolution = undefined
    this.isMega = undefined
    this.isRegion = undefined
    this.name = ''
    this.type = []

    if (this.isSave) {
      window.localStorage.removeItem('filters')
    }
  }

  @action
  public setKeyword(keyword: string) {
    this.keyword = keyword
  }

  @action
  private changeSwitchValue(value: string): boolean | undefined {
    if (value === 'true') {
      return true
    } else if (value === 'false') {
      return false
    } else if (value === 'all') {
      return undefined
    }
  }
}
