type FilterTypes = {
  name?: string
  generation?: Array<string>
  type?: Array<string>
  isMega?: boolean
  isRegion?: boolean
  isEvolution?: boolean
}

export const variablesCheck = (filter: FilterTypes) => {
  const {
    name,
    generation = [],
    type = [],
    isMega,
    isRegion,
    isEvolution,
  } = filter

  const variable = {
    name,
    generation: generation.length === 0 ? undefined : generation,
    type: type.length === 0 ? undefined : type,
    isMega,
    isRegion,
    isEvolution,
  }

  return variable
}
