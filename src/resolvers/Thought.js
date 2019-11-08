function postedBy(parent, args, context) {
    return context.prisma.thought({id: parent.id}).postedBy()
}

function loves(parent, args, context) {
    return context.prisma.thought({id: parent.id}).loves()
}

function comments(parent, args, context) {
    return context.prisma.thought({id: parent.id}).comments()
}

module.exports = {
    postedBy,
    loves,
    comments
}