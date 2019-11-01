const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const User = require('./resolvers/User')
const Thought = require('./resolvers/Thought')
const Comment = require('./resolvers/Comment')
const Follow = require('./resolvers/Follow')
const Love = require('./resolvers/Love')

const resolvers = {
    Query,
    Mutation,
    User,
    Thought,
    Comment,
    Follow,
    Love
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => ({
        ...request,
        prisma
    })
})


server.start(() => console.log(`Server is running on http://localhost:4000`));