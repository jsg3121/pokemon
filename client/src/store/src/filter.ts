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
        if (this.type.indexOf(value.toString()) === -1) {
          this.type = [...this.type, value.toString()]
        } else {
          const index = this.type.indexOf(value.toString())
          const cut = [...this.type]
          cut.splice(index, 1)
          this.type = [...cut]
        }
        return
      case 'name':
        this.name = value.toString()
        return
      case 'generation':
        if (this.generation.indexOf(value.toString()) === -1) {
          this.generation = [...this.generation, value.toString()]
        } else {
          const index = this.generation.indexOf(value.toString())
          const cut = [...this.generation]
          cut.splice(index, 1)
          this.generation = cut
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
  public setValidation() {
    const variable = {
      name: this.name,
      generation: this.generation.length === 0 ? undefined : this.generation,
      type: this.type.length === 0 ? undefined : this.type,
      isMega: this.isMega,
      isRegion: this.isRegion,
      isEvolution: this.isEvolution,
    }

    return variable
  }
}
