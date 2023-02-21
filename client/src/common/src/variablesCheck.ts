type FilterTypes = {
  name?: string
  generation?: Array<string>
  type?: Array<string>
  isMega?: string
  isRegion?: string
  isEvolution?: string
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
    isMega: isMega === 'true' ? true : isMega === 'false' ? false : undefined,
    isRegion:
      isRegion === 'true' ? true : isRegion === 'false' ? false : undefined,
    isEvolution:
      isEvolution === 'true'
        ? true
        : isEvolution === 'false'
        ? false
        : undefined,
  }

  return variable
}
