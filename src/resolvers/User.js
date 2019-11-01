function followings(parent, args, context) {
    return context.prisma.user({id: parent.id}).followings()
}

function followers(parent, args, context) {
    return context.prisma.user({id: parent.id}).followers()
}

function thoughts(parent, args, context) {
    return context.prisma.user({id: parent.id}).thoughts()
}

function loves(parent, args, context) {
    return context.prisma.user({id: parent.id}).loves()
}

module.exports = {
    followings,
    followers,
    thoughts,
    loves,
}