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

  return context.prisma.createFollow({
    user: { connect: { id: userId } },
    followedUser: { connect: { id: args.followId } }
  });
}

async function unFollow(parent, args, context, info) {
  const userId = getUserId(context);

  const followUser = await context.prisma.user({ id: args.followId });
  if (!followUser) throw new Error("Following user does not exist");

  return context.prisma.deleteFollow({
    user: userId,
    followedUser: followedUser.id
  });
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

  return context.prisma.createComment({
    content: args.content,
    postedBy: { connect: { id: userId } },
    thought: { connect: { id: args.thoughtId } }
  });
}

async function love(parent, args, context, info) {
  const userId = getUserId(context);

  return context.prisma.createLove({
    thought: { connect: { id: args.thoughtId } },
    user: { connect: { id: userId } }
  });
}

module.exports = {
  signup,
  login,
  follow,
  unFollow,
  post,
  love,
  comment
};
