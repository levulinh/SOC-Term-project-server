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

module.exports = {
  users,
  user
};
