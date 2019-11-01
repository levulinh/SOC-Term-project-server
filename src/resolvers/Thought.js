function postedBy(parent, args, context) {
    return context.prisma.thought({id: parent.id}).postedBy()
}

function loves(parent, args, context) {
    return context.prisma.thought({id: parent.id}).loves()
}

module.exports = {
    postedBy,
    loves
}