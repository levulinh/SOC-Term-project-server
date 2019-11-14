const { GraphQLServer, PubSub } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')

const User = require('./resolvers/User')
const Thought = require('./resolvers/Thought')
const Comment = require('./resolvers/Comment')
const Love = require('./resolvers/Love')

const resolvers = {
    Query,
    Mutation,
    User,
    Subscription,
    Thought,
    Comment,
    Love
}

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => ({
        ...request,
        prisma,
        pubsub
    })
})


server.start(() => console.log(`Server is running on http://localhost:4000`));