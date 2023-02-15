import { action, makeObservable, observable } from 'mobx'

export class FilterStore {
  @observable public name: string = ''
  @observable public type: Array<string> = []
  @observable public generation: number | 'all' = 'all'
  @observable public isMega: boolean | null = null
  @observable public isRegion: boolean | null = null
  @observable public isEvolution: boolean | null = null

  constructor() {
    makeObservable(this)
  }

  @action
  public changeFilter(data: {
    type: keyof FilterStore
    value: string | number | boolean
  }) {
    const { type, value } = data

    switch (type) {
      case 'type':
        if (this.type.length <= 2) {
          if (this.type.indexOf(value.toString()) === -1) {
            this.type.push(value.toString())
            this.setTypeArray(this.type)
          } else {
            this.type.splice(this.type.indexOf(value.toString()), 1)
          }
        }
        return

      default:
        break
    }
  }

  @action
  public clear() {
    this.generation = 0
    this.isEvolution = null
    this.isMega = null
    this.isRegion = null
    this.name = ''
    this.type = []
  }

  @action
  private setTypeArray(arr: Array<string>) {
    const set = new Set(this.type)
    this.type = [...set]
  }

  private checkTypeLength() {
    if (this.type.length === 2) {
      return false
    }
    return true
  }
}
