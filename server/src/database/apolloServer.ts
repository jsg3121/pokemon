import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import resolvers from './src/resolver'
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache'
import { ApolloServerPluginCacheControl } from 'apollo-server-core'

export const createApolloServer = async ({ app }) => {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  })

  const cache = new InMemoryLRUCache({
    ttl: 1000 * 60 * 60 * 12, // 각 캐시 항목의 생존 시간 (밀리초 단위, 12시간)
  })

  const apolloServer = new ApolloServer({
    schema,
    cache,
    plugins: [ApolloServerPluginCacheControl({ defaultMaxAge: 60 * 60 * 12 })], // 12시간
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: '/graphql' })

  return apolloServer
}
