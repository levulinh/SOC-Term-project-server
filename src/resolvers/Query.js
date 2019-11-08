const _ = require('lodash');
const { getUserId } = require("../utils");

async function users(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [{ email_contains: args.filter }, { name_contains: args.filter }]
      }
    : {};

  const count = await context.prisma
    .usersConnection({
      where
    })
    .aggregate()
    .count();

  const users = await context.prisma.users({
    where,
    first: args.first,
    skip: args.skip,
    orderBy: args.orderBy
  });

  return { count, users };
}

async function user(parent, args, context, info) {
  const where = args.userId
    ? {
        id: args.userId
      }
    : args.email
    ? {
        email: args.email
      }
    : {};

  return context.prisma.user(where);
}

async function userEntry(parent, args, context, info) {
  const where = args.userId
    ? {
        id: args.userId
      }
    : args.email
    ? {
        email: args.email
      }
    : {};

  const user = await context.prisma.user(where)

  const userEntry = JSON.parse(JSON.stringify(user));
  const followers = await context.prisma.user(where).followers()
  const followings = await context.prisma.user(where).followings()

  userEntry.followers = {count: followers.length, users: followers}
  userEntry.followings = {count: followings.length, users: followings}

  return userEntry
}

async function getFeed(parent, args, context, info) {
  const followings = await context.prisma.user({id: getUserId(context)}).followings();
  const listId = _.map(followings, f => f.id);
  const thoughts = await context.prisma.thoughts({
    where: {OR: [{postedBy: {id_in: listId}}, {postedBy: {id: getUserId(context)}}]},
    orderBy: args.orderBy
  })
  const count = await context.prisma.thoughtsConnection({
    where: {OR: [{postedBy: {id_in: listId}}, {postedBy: {id: getUserId(context)}}]},
    orderBy: args.orderBy
  }).aggregate().count()

  return {count, thoughts}
}

module.exports = {
  users,
  user,
  userEntry,
  getFeed
};
