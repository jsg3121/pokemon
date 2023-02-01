import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import resolvers from './src/resolver'

export const createApolloServer = async ({ app }) => {
  const schema = await buildSchema({
    resolvers,
  })

  const apolloServer = new ApolloServer({
    schema,
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: '/graphql' })

  return apolloServer
}
