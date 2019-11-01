async function user(parent, args, context) {
    return context.prisma.follow({id: parent.id}).user()
}

async function followedUser(parent, args, context) {
    return context.prisma.follow({id: parent.id}).followedUser()
}

module.exports = {
    user,
    followedUser
}