import { action, makeObservable, observable } from 'mobx'

export class FilterStore {
  @observable public name: string | undefined = undefined
  @observable public type: Array<string> = []
  @observable public generation: Array<string> = []
  @observable public isMega: boolean | undefined = undefined
  @observable public isRegion: boolean | undefined = undefined
  @observable public isEvolution: boolean | undefined = undefined

  constructor() {
    makeObservable(this)
  }

  @action
  public changeFilter(data: {
    type: keyof FilterStore
    value: string | boolean
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
        if (this.generation.indexOf(value.toString()) === -1) {
          this.generation.push(value.toString())
        } else {
          this.generation.splice(this.generation.indexOf(value.toString()), 1)
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
    this.isEvolution = undefined
    this.isMega = undefined
    this.isRegion = undefined
    this.name = ''
    this.type = []
  }

  @action
  private setTypeArray() {
    const set = new Set(this.type)
    this.type = [...set]
  }
}
