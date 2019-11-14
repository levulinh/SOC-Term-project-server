const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserId } = require("../utils");

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error("No such user found");
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
}

async function follow(parent, args, context, info) {
  const userId = getUserId(context);

  const followUser = await context.prisma.user({ id: args.followId });
  if (!followUser) throw new Error("Following user does not exist");

  await context.prisma.updateUser({
    where: { id: args.followId },
    data: { followers: { connect: { id: userId } } }
  });

  await context.prisma.updateUser({
    where: { id: userId },
    data: { followings: { connect: { id: args.followId } } }
  });

  const user = await context.prisma.user({ id: args.followId })

  const userEntry = JSON.parse(JSON.stringify(user));
  const followers = await context.prisma.user({ id: args.followId }).followers()
  const followings = await context.prisma.user({ id: args.followId }).followings()

  userEntry.followers = { count: followers.length, users: followers }
  userEntry.followings = { count: followings.length, users: followings }

  return userEntry
}

async function unFollow(parent, args, context, info) {
  const userId = getUserId(context);

  const followUser = await context.prisma.user({ id: args.followId });
  if (!followUser) throw new Error("Following user does not exist");

  await context.prisma.updateUser({
    where: { id: args.followId },
    data: { followers: { disconnect: { id: userId } } }
  });

  await context.prisma.updateUser({
    where: { id: userId },
    data: { followings: { disconnect: { id: args.followId } } }
  });


  const user = await context.prisma.user({ id: args.followId })

  const userEntry = JSON.parse(JSON.stringify(user));
  const followers = await context.prisma.user({ id: args.followId }).followers()
  const followings = await context.prisma.user({ id: args.followId }).followings()

  userEntry.followers = { count: followers.length, users: followers }
  userEntry.followings = { count: followings.length, users: followings }

  return userEntry
}

async function post(parent, args, context, info) {
  const userId = getUserId(context);

  return context.prisma.createThought({
    content: args.content,
    postedBy: { connect: { id: userId } }
  });
}

async function comment(parent, args, context, info) {
  const userId = getUserId(context);

  await context.prisma.createComment({
    content: args.content,
    postedBy: { connect: { id: userId } },
    thought: { connect: { id: args.thoughtId } }
  });

  return context.prisma.thought({ id: args.thoughtId })
}

async function love(parent, args, context, info) {
  const userId = getUserId(context);

  const exist = await context.prisma.$exists.love({
    user: { id: userId },
    thought: { id: args.thoughtId }
  })

  if (exist) throw new Error("Already loved this thought");

  return context.prisma.createLove({
    thought: { connect: { id: args.thoughtId } },
    user: { connect: { id: userId } }
  });
}

async function unlove(parent, args, context, info) {
  const userId = getUserId(context);

  const exist = await context.prisma.$exists.love({
    user: { id: userId },
    thought: { id: args.thoughtId }
  })

  if (!exist) throw new Error("Haven't loved this thought");

  await context.prisma.deleteManyLoves({ user: { id: userId }, thought: { id: args.thoughtId } });
  return context.prisma.thought({ id: args.thoughtId });
}

module.exports = {
  signup,
  login,
  follow,
  unFollow,
  post,
  love,
  unlove,
  comment
};
