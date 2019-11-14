function newThoughtSubscribe(parent, args, context, info) {
  // const followings = await context.prisma.user({ id: getUserId(context) }).followings();
  // const listId = _.map(followings, f => f.id);
  return context.prisma.$subscribe.thought({ mutation_in: ['CREATED'] }).node()
}

const newThought = {
  subscribe: newThoughtSubscribe,
  resolve: payload => {
    return payload
  }
}

function newCommentSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.comment({ mutation_in: ['CREATED'], node: { thought: { id: args.thoughtId } } }).node()
}

const newComment = {
  subscribe: newCommentSubscribe,
  resolve: payload => {
    return payload;
  }
}

function newUserThoughtSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.thought(
    {
      mutation_in: ['CREATED'],
      node: { user: { id: args.id } }
    }).node()
}

const newUserThought = {
  subscribe: newUserThoughtSubscribe,
  resolve: payload => {
    return payload
  }
}

module.exports = {
  newThought,
  newComment,
  newUserThought
}