module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateComment {
  count: Int!
}

type AggregateLove {
  count: Int!
}

type AggregateThought {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Comment {
  id: ID!
  createdAt: DateTime
  thought: Thought!
  content: String!
  postedBy: User!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  id: ID
  thought: ThoughtCreateOneWithoutCommentsInput!
  content: String!
  postedBy: UserCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutPostedByInput {
  create: [CommentCreateWithoutPostedByInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutThoughtInput {
  create: [CommentCreateWithoutThoughtInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutPostedByInput {
  id: ID
  thought: ThoughtCreateOneWithoutCommentsInput!
  content: String!
}

input CommentCreateWithoutThoughtInput {
  id: ID
  content: String!
  postedBy: UserCreateOneWithoutCommentsInput!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  content_ASC
  content_DESC
}

type CommentPreviousValues {
  id: ID!
  createdAt: DateTime
  content: String!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  thought: ThoughtUpdateOneRequiredWithoutCommentsInput
  content: String
  postedBy: UserUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateManyDataInput {
  content: String
}

input CommentUpdateManyMutationInput {
  content: String
}

input CommentUpdateManyWithoutPostedByInput {
  create: [CommentCreateWithoutPostedByInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithoutThoughtInput {
  create: [CommentCreateWithoutThoughtInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutThoughtInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutThoughtInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutPostedByDataInput {
  thought: ThoughtUpdateOneRequiredWithoutCommentsInput
  content: String
}

input CommentUpdateWithoutThoughtDataInput {
  content: String
  postedBy: UserUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateWithWhereUniqueWithoutPostedByInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutPostedByDataInput!
}

input CommentUpdateWithWhereUniqueWithoutThoughtInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutThoughtDataInput!
}

input CommentUpsertWithWhereUniqueWithoutPostedByInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutPostedByDataInput!
  create: CommentCreateWithoutPostedByInput!
}

input CommentUpsertWithWhereUniqueWithoutThoughtInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutThoughtDataInput!
  create: CommentCreateWithoutThoughtInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  thought: ThoughtWhereInput
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  postedBy: UserWhereInput
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

enum Gender {
  MALE
  FEMALE
}

scalar Long

type Love {
  id: ID!
  thought: Thought!
  user: User!
}

type LoveConnection {
  pageInfo: PageInfo!
  edges: [LoveEdge]!
  aggregate: AggregateLove!
}

input LoveCreateInput {
  id: ID
  thought: ThoughtCreateOneWithoutLovesInput!
  user: UserCreateOneWithoutLovesInput!
}

input LoveCreateManyWithoutThoughtInput {
  create: [LoveCreateWithoutThoughtInput!]
  connect: [LoveWhereUniqueInput!]
}

input LoveCreateManyWithoutUserInput {
  create: [LoveCreateWithoutUserInput!]
  connect: [LoveWhereUniqueInput!]
}

input LoveCreateWithoutThoughtInput {
  id: ID
  user: UserCreateOneWithoutLovesInput!
}

input LoveCreateWithoutUserInput {
  id: ID
  thought: ThoughtCreateOneWithoutLovesInput!
}

type LoveEdge {
  node: Love!
  cursor: String!
}

enum LoveOrderByInput {
  id_ASC
  id_DESC
}

type LovePreviousValues {
  id: ID!
}

input LoveScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [LoveScalarWhereInput!]
  OR: [LoveScalarWhereInput!]
  NOT: [LoveScalarWhereInput!]
}

type LoveSubscriptionPayload {
  mutation: MutationType!
  node: Love
  updatedFields: [String!]
  previousValues: LovePreviousValues
}

input LoveSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LoveWhereInput
  AND: [LoveSubscriptionWhereInput!]
  OR: [LoveSubscriptionWhereInput!]
  NOT: [LoveSubscriptionWhereInput!]
}

input LoveUpdateInput {
  thought: ThoughtUpdateOneRequiredWithoutLovesInput
  user: UserUpdateOneRequiredWithoutLovesInput
}

input LoveUpdateManyWithoutThoughtInput {
  create: [LoveCreateWithoutThoughtInput!]
  delete: [LoveWhereUniqueInput!]
  connect: [LoveWhereUniqueInput!]
  set: [LoveWhereUniqueInput!]
  disconnect: [LoveWhereUniqueInput!]
  update: [LoveUpdateWithWhereUniqueWithoutThoughtInput!]
  upsert: [LoveUpsertWithWhereUniqueWithoutThoughtInput!]
  deleteMany: [LoveScalarWhereInput!]
}

input LoveUpdateManyWithoutUserInput {
  create: [LoveCreateWithoutUserInput!]
  delete: [LoveWhereUniqueInput!]
  connect: [LoveWhereUniqueInput!]
  set: [LoveWhereUniqueInput!]
  disconnect: [LoveWhereUniqueInput!]
  update: [LoveUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [LoveUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [LoveScalarWhereInput!]
}

input LoveUpdateWithoutThoughtDataInput {
  user: UserUpdateOneRequiredWithoutLovesInput
}

input LoveUpdateWithoutUserDataInput {
  thought: ThoughtUpdateOneRequiredWithoutLovesInput
}

input LoveUpdateWithWhereUniqueWithoutThoughtInput {
  where: LoveWhereUniqueInput!
  data: LoveUpdateWithoutThoughtDataInput!
}

input LoveUpdateWithWhereUniqueWithoutUserInput {
  where: LoveWhereUniqueInput!
  data: LoveUpdateWithoutUserDataInput!
}

input LoveUpsertWithWhereUniqueWithoutThoughtInput {
  where: LoveWhereUniqueInput!
  update: LoveUpdateWithoutThoughtDataInput!
  create: LoveCreateWithoutThoughtInput!
}

input LoveUpsertWithWhereUniqueWithoutUserInput {
  where: LoveWhereUniqueInput!
  update: LoveUpdateWithoutUserDataInput!
  create: LoveCreateWithoutUserInput!
}

input LoveWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  thought: ThoughtWhereInput
  user: UserWhereInput
  AND: [LoveWhereInput!]
  OR: [LoveWhereInput!]
  NOT: [LoveWhereInput!]
}

input LoveWhereUniqueInput {
  id: ID
}

type Mutation {
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createLove(data: LoveCreateInput!): Love!
  updateLove(data: LoveUpdateInput!, where: LoveWhereUniqueInput!): Love
  upsertLove(where: LoveWhereUniqueInput!, create: LoveCreateInput!, update: LoveUpdateInput!): Love!
  deleteLove(where: LoveWhereUniqueInput!): Love
  deleteManyLoves(where: LoveWhereInput): BatchPayload!
  createThought(data: ThoughtCreateInput!): Thought!
  updateThought(data: ThoughtUpdateInput!, where: ThoughtWhereUniqueInput!): Thought
  updateManyThoughts(data: ThoughtUpdateManyMutationInput!, where: ThoughtWhereInput): BatchPayload!
  upsertThought(where: ThoughtWhereUniqueInput!, create: ThoughtCreateInput!, update: ThoughtUpdateInput!): Thought!
  deleteThought(where: ThoughtWhereUniqueInput!): Thought
  deleteManyThoughts(where: ThoughtWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  love(where: LoveWhereUniqueInput!): Love
  loves(where: LoveWhereInput, orderBy: LoveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Love]!
  lovesConnection(where: LoveWhereInput, orderBy: LoveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LoveConnection!
  thought(where: ThoughtWhereUniqueInput!): Thought
  thoughts(where: ThoughtWhereInput, orderBy: ThoughtOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Thought]!
  thoughtsConnection(where: ThoughtWhereInput, orderBy: ThoughtOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ThoughtConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  love(where: LoveSubscriptionWhereInput): LoveSubscriptionPayload
  thought(where: ThoughtSubscriptionWhereInput): ThoughtSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Thought {
  id: ID!
  postedBy: User!
  news: String
  createdAt: DateTime
  content: String!
  loves(where: LoveWhereInput, orderBy: LoveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Love!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

type ThoughtConnection {
  pageInfo: PageInfo!
  edges: [ThoughtEdge]!
  aggregate: AggregateThought!
}

input ThoughtCreateInput {
  id: ID
  postedBy: UserCreateOneWithoutThoughtsInput!
  news: String
  content: String!
  loves: LoveCreateManyWithoutThoughtInput
  comments: CommentCreateManyWithoutThoughtInput
}

input ThoughtCreateManyWithoutPostedByInput {
  create: [ThoughtCreateWithoutPostedByInput!]
  connect: [ThoughtWhereUniqueInput!]
}

input ThoughtCreateOneWithoutCommentsInput {
  create: ThoughtCreateWithoutCommentsInput
  connect: ThoughtWhereUniqueInput
}

input ThoughtCreateOneWithoutLovesInput {
  create: ThoughtCreateWithoutLovesInput
  connect: ThoughtWhereUniqueInput
}

input ThoughtCreateWithoutCommentsInput {
  id: ID
  postedBy: UserCreateOneWithoutThoughtsInput!
  news: String
  content: String!
  loves: LoveCreateManyWithoutThoughtInput
}

input ThoughtCreateWithoutLovesInput {
  id: ID
  postedBy: UserCreateOneWithoutThoughtsInput!
  news: String
  content: String!
  comments: CommentCreateManyWithoutThoughtInput
}

input ThoughtCreateWithoutPostedByInput {
  id: ID
  news: String
  content: String!
  loves: LoveCreateManyWithoutThoughtInput
  comments: CommentCreateManyWithoutThoughtInput
}

type ThoughtEdge {
  node: Thought!
  cursor: String!
}

enum ThoughtOrderByInput {
  id_ASC
  id_DESC
  news_ASC
  news_DESC
  createdAt_ASC
  createdAt_DESC
  content_ASC
  content_DESC
}

type ThoughtPreviousValues {
  id: ID!
  news: String
  createdAt: DateTime
  content: String!
}

input ThoughtScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  news: String
  news_not: String
  news_in: [String!]
  news_not_in: [String!]
  news_lt: String
  news_lte: String
  news_gt: String
  news_gte: String
  news_contains: String
  news_not_contains: String
  news_starts_with: String
  news_not_starts_with: String
  news_ends_with: String
  news_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [ThoughtScalarWhereInput!]
  OR: [ThoughtScalarWhereInput!]
  NOT: [ThoughtScalarWhereInput!]
}

type ThoughtSubscriptionPayload {
  mutation: MutationType!
  node: Thought
  updatedFields: [String!]
  previousValues: ThoughtPreviousValues
}

input ThoughtSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ThoughtWhereInput
  AND: [ThoughtSubscriptionWhereInput!]
  OR: [ThoughtSubscriptionWhereInput!]
  NOT: [ThoughtSubscriptionWhereInput!]
}

input ThoughtUpdateInput {
  postedBy: UserUpdateOneRequiredWithoutThoughtsInput
  news: String
  content: String
  loves: LoveUpdateManyWithoutThoughtInput
  comments: CommentUpdateManyWithoutThoughtInput
}

input ThoughtUpdateManyDataInput {
  news: String
  content: String
}

input ThoughtUpdateManyMutationInput {
  news: String
  content: String
}

input ThoughtUpdateManyWithoutPostedByInput {
  create: [ThoughtCreateWithoutPostedByInput!]
  delete: [ThoughtWhereUniqueInput!]
  connect: [ThoughtWhereUniqueInput!]
  set: [ThoughtWhereUniqueInput!]
  disconnect: [ThoughtWhereUniqueInput!]
  update: [ThoughtUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [ThoughtUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [ThoughtScalarWhereInput!]
  updateMany: [ThoughtUpdateManyWithWhereNestedInput!]
}

input ThoughtUpdateManyWithWhereNestedInput {
  where: ThoughtScalarWhereInput!
  data: ThoughtUpdateManyDataInput!
}

input ThoughtUpdateOneRequiredWithoutCommentsInput {
  create: ThoughtCreateWithoutCommentsInput
  update: ThoughtUpdateWithoutCommentsDataInput
  upsert: ThoughtUpsertWithoutCommentsInput
  connect: ThoughtWhereUniqueInput
}

input ThoughtUpdateOneRequiredWithoutLovesInput {
  create: ThoughtCreateWithoutLovesInput
  update: ThoughtUpdateWithoutLovesDataInput
  upsert: ThoughtUpsertWithoutLovesInput
  connect: ThoughtWhereUniqueInput
}

input ThoughtUpdateWithoutCommentsDataInput {
  postedBy: UserUpdateOneRequiredWithoutThoughtsInput
  news: String
  content: String
  loves: LoveUpdateManyWithoutThoughtInput
}

input ThoughtUpdateWithoutLovesDataInput {
  postedBy: UserUpdateOneRequiredWithoutThoughtsInput
  news: String
  content: String
  comments: CommentUpdateManyWithoutThoughtInput
}

input ThoughtUpdateWithoutPostedByDataInput {
  news: String
  content: String
  loves: LoveUpdateManyWithoutThoughtInput
  comments: CommentUpdateManyWithoutThoughtInput
}

input ThoughtUpdateWithWhereUniqueWithoutPostedByInput {
  where: ThoughtWhereUniqueInput!
  data: ThoughtUpdateWithoutPostedByDataInput!
}

input ThoughtUpsertWithoutCommentsInput {
  update: ThoughtUpdateWithoutCommentsDataInput!
  create: ThoughtCreateWithoutCommentsInput!
}

input ThoughtUpsertWithoutLovesInput {
  update: ThoughtUpdateWithoutLovesDataInput!
  create: ThoughtCreateWithoutLovesInput!
}

input ThoughtUpsertWithWhereUniqueWithoutPostedByInput {
  where: ThoughtWhereUniqueInput!
  update: ThoughtUpdateWithoutPostedByDataInput!
  create: ThoughtCreateWithoutPostedByInput!
}

input ThoughtWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  postedBy: UserWhereInput
  news: String
  news_not: String
  news_in: [String!]
  news_not_in: [String!]
  news_lt: String
  news_lte: String
  news_gt: String
  news_gte: String
  news_contains: String
  news_not_contains: String
  news_starts_with: String
  news_not_starts_with: String
  news_ends_with: String
  news_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  loves_every: LoveWhereInput
  loves_some: LoveWhereInput
  loves_none: LoveWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  AND: [ThoughtWhereInput!]
  OR: [ThoughtWhereInput!]
  NOT: [ThoughtWhereInput!]
}

input ThoughtWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  username: String!
  moto: String!
  gender: Gender!
  followings(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  followers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  thoughts(where: ThoughtWhereInput, orderBy: ThoughtOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Thought!]
  loves(where: LoveWhereInput, orderBy: LoveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Love!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  username: String!
  moto: String!
  gender: Gender!
  followings: UserCreateManyWithoutFollowingsInput
  followers: UserCreateManyWithoutFollowersInput
  thoughts: ThoughtCreateManyWithoutPostedByInput
  loves: LoveCreateManyWithoutUserInput
  comments: CommentCreateManyWithoutPostedByInput
}

input UserCreateManyWithoutFollowersInput {
  create: [UserCreateWithoutFollowersInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFollowingsInput {
  create: [UserCreateWithoutFollowingsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLovesInput {
  create: UserCreateWithoutLovesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutThoughtsInput {
  create: UserCreateWithoutThoughtsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCommentsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  username: String!
  moto: String!
  gender: Gender!
  followings: UserCreateManyWithoutFollowingsInput
  followers: UserCreateManyWithoutFollowersInput
  thoughts: ThoughtCreateManyWithoutPostedByInput
  loves: LoveCreateManyWithoutUserInput
}

input UserCreateWithoutFollowersInput {
  id: ID
  name: String!
  email: String!
  password: String!
  username: String!
  moto: String!
  gender: Gender!
  followings: UserCreateManyWithoutFollowingsInput
  thoughts: ThoughtCreateManyWithoutPostedByInput
  loves: LoveCreateManyWithoutUserInput
  comments: CommentCreateManyWithoutPostedByInput
}

input UserCreateWithoutFollowingsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  username: String!
  moto: String!
  gender: Gender!
  followers: UserCreateManyWithoutFollowersInput
  thoughts: ThoughtCreateManyWithoutPostedByInput
  loves: LoveCreateManyWithoutUserInput
  comments: CommentCreateManyWithoutPostedByInput
}

input UserCreateWithoutLovesInput {
  id: ID
  name: String!
  email: String!
  password: String!
  username: String!
  moto: String!
  gender: Gender!
  followings: UserCreateManyWithoutFollowingsInput
  followers: UserCreateManyWithoutFollowersInput
  thoughts: ThoughtCreateManyWithoutPostedByInput
  comments: CommentCreateManyWithoutPostedByInput
}

input UserCreateWithoutThoughtsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  username: String!
  moto: String!
  gender: Gender!
  followings: UserCreateManyWithoutFollowingsInput
  followers: UserCreateManyWithoutFollowersInput
  loves: LoveCreateManyWithoutUserInput
  comments: CommentCreateManyWithoutPostedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  username_ASC
  username_DESC
  moto_ASC
  moto_DESC
  gender_ASC
  gender_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  username: String!
  moto: String!
  gender: Gender!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  moto: String
  moto_not: String
  moto_in: [String!]
  moto_not_in: [String!]
  moto_lt: String
  moto_lte: String
  moto_gt: String
  moto_gte: String
  moto_contains: String
  moto_not_contains: String
  moto_starts_with: String
  moto_not_starts_with: String
  moto_ends_with: String
  moto_not_ends_with: String
  gender: Gender
  gender_not: Gender
  gender_in: [Gender!]
  gender_not_in: [Gender!]
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  username: String
  moto: String
  gender: Gender
  followings: UserUpdateManyWithoutFollowingsInput
  followers: UserUpdateManyWithoutFollowersInput
  thoughts: ThoughtUpdateManyWithoutPostedByInput
  loves: LoveUpdateManyWithoutUserInput
  comments: CommentUpdateManyWithoutPostedByInput
}

input UserUpdateManyDataInput {
  name: String
  email: String
  password: String
  username: String
  moto: String
  gender: Gender
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  username: String
  moto: String
  gender: Gender
}

input UserUpdateManyWithoutFollowersInput {
  create: [UserCreateWithoutFollowersInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFollowersInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFollowersInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutFollowingsInput {
  create: [UserCreateWithoutFollowingsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFollowingsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFollowingsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  update: UserUpdateWithoutCommentsDataInput
  upsert: UserUpsertWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutLovesInput {
  create: UserCreateWithoutLovesInput
  update: UserUpdateWithoutLovesDataInput
  upsert: UserUpsertWithoutLovesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutThoughtsInput {
  create: UserCreateWithoutThoughtsInput
  update: UserUpdateWithoutThoughtsDataInput
  upsert: UserUpsertWithoutThoughtsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCommentsDataInput {
  name: String
  email: String
  password: String
  username: String
  moto: String
  gender: Gender
  followings: UserUpdateManyWithoutFollowingsInput
  followers: UserUpdateManyWithoutFollowersInput
  thoughts: ThoughtUpdateManyWithoutPostedByInput
  loves: LoveUpdateManyWithoutUserInput
}

input UserUpdateWithoutFollowersDataInput {
  name: String
  email: String
  password: String
  username: String
  moto: String
  gender: Gender
  followings: UserUpdateManyWithoutFollowingsInput
  thoughts: ThoughtUpdateManyWithoutPostedByInput
  loves: LoveUpdateManyWithoutUserInput
  comments: CommentUpdateManyWithoutPostedByInput
}

input UserUpdateWithoutFollowingsDataInput {
  name: String
  email: String
  password: String
  username: String
  moto: String
  gender: Gender
  followers: UserUpdateManyWithoutFollowersInput
  thoughts: ThoughtUpdateManyWithoutPostedByInput
  loves: LoveUpdateManyWithoutUserInput
  comments: CommentUpdateManyWithoutPostedByInput
}

input UserUpdateWithoutLovesDataInput {
  name: String
  email: String
  password: String
  username: String
  moto: String
  gender: Gender
  followings: UserUpdateManyWithoutFollowingsInput
  followers: UserUpdateManyWithoutFollowersInput
  thoughts: ThoughtUpdateManyWithoutPostedByInput
  comments: CommentUpdateManyWithoutPostedByInput
}

input UserUpdateWithoutThoughtsDataInput {
  name: String
  email: String
  password: String
  username: String
  moto: String
  gender: Gender
  followings: UserUpdateManyWithoutFollowingsInput
  followers: UserUpdateManyWithoutFollowersInput
  loves: LoveUpdateManyWithoutUserInput
  comments: CommentUpdateManyWithoutPostedByInput
}

input UserUpdateWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFollowersDataInput!
}

input UserUpdateWithWhereUniqueWithoutFollowingsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFollowingsDataInput!
}

input UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput!
  create: UserCreateWithoutCommentsInput!
}

input UserUpsertWithoutLovesInput {
  update: UserUpdateWithoutLovesDataInput!
  create: UserCreateWithoutLovesInput!
}

input UserUpsertWithoutThoughtsInput {
  update: UserUpdateWithoutThoughtsDataInput!
  create: UserCreateWithoutThoughtsInput!
}

input UserUpsertWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFollowersDataInput!
  create: UserCreateWithoutFollowersInput!
}

input UserUpsertWithWhereUniqueWithoutFollowingsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFollowingsDataInput!
  create: UserCreateWithoutFollowingsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  moto: String
  moto_not: String
  moto_in: [String!]
  moto_not_in: [String!]
  moto_lt: String
  moto_lte: String
  moto_gt: String
  moto_gte: String
  moto_contains: String
  moto_not_contains: String
  moto_starts_with: String
  moto_not_starts_with: String
  moto_ends_with: String
  moto_not_ends_with: String
  gender: Gender
  gender_not: Gender
  gender_in: [Gender!]
  gender_not_in: [Gender!]
  followings_every: UserWhereInput
  followings_some: UserWhereInput
  followings_none: UserWhereInput
  followers_every: UserWhereInput
  followers_some: UserWhereInput
  followers_none: UserWhereInput
  thoughts_every: ThoughtWhereInput
  thoughts_some: ThoughtWhereInput
  thoughts_none: ThoughtWhereInput
  loves_every: LoveWhereInput
  loves_some: LoveWhereInput
  loves_none: LoveWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`
      }
    