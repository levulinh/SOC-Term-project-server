"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Thought",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Follow",
    embedded: false
  },
  {
    name: "Love",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/linh-le-vu-c4ac54/term-proj/dev`
});
exports.prisma = new exports.Prisma();
