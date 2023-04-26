export const GqlMode =
  process.env.NODE_ENV === 'production'
    ? 'http://43.201.49.91:4000/graphql'
    : 'http://192.168.5.21:4000/graphql'

export const imageMode =
  process.env.NODE_ENV === 'production'
    ? 'http://43.201.49.91:4000/image'
    : 'http://192.168.5.21:4000/image'
