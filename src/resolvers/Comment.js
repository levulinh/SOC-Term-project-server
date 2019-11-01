async function postedBy(parent, args, context) {
    return context.prisma.comment({id: parent.id}).postedBy()
}

async function thought(parent, args, context) {
    return context.prisma.comment({id: parent.id}).thought()
}

module.exports = {
    postedBy,
    thought
}