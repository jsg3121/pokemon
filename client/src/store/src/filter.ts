import { action, makeObservable, observable } from 'mobx'

export class FilterStore {
  @observable public name: string = ''
  @observable public type: Array<string> = []
  @observable public generation: Array<number> = []
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
            this.setTypeArray()
          } else {
            this.type.splice(this.type.indexOf(value.toString()), 1)
          }
        }
        return
      case 'name':
        this.name = value.toString()
        return
      case 'generation':
        if (value === 'all') {
          this.generation = []
        } else {
          if (this.generation.indexOf(parseInt(value.toString(), 10)) === -1) {
            this.generation.push(parseInt(value.toString(), 10))
          } else {
            this.generation.splice(
              this.generation.indexOf(parseInt(value.toString(), 10)),
              1
            )
          }
        }
        return

      case 'isEvolution':
      case 'isMega':
      case 'isRegion':
        this[`${type}`] = Boolean(value)
        return
    }
  }

  @action
  public clear() {
    this.generation = []
    this.isEvolution = null
    this.isMega = null
    this.isRegion = null
    this.name = ''
    this.type = []
  }

  @action
  private setTypeArray() {
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
