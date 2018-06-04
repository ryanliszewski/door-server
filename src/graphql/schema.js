const GraphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema
} = GraphQL;

const UserQuery = require('./queries/User');


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default query provided by our application',
  fields: {
    users: UserQuery.index(),
  }, 
});

module.exports = new GraphQLSchema({
  query: RootQuery,
})

