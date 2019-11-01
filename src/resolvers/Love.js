async function thought(parent, args, context) {
    return context.prisma.love({id: parent.id}).thought()
}

async function user(parent, args, context) {
    return context.prisma.love({id: parent.id}).user()
}

module.exports = {
    thought,
    user
}