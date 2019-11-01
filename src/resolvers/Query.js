async function users(parent, args, context, info) {
    const where = args.userId ? {
        id: args.userId
    } : args.email ? {
        email: args.email
    } : {}

    const users = await context.prisma.users({where})

    return users
}

module.exports = {
    users,
}