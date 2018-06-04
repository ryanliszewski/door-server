const GraphQL = require('graphql');

const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType
} = GraphQL

const UserType = new GraphQL.GraphQLObjectType({
  name: 'User', 
  description: 'User type; All the users schema for Door',

  fields:() => ({
    id: {
      type: GraphQLID,
      description: 'ID of the user'
    },

    name: {
      type: GraphQLString,
      description: 'Name of user'
    }, 

    email: {
      type: GraphQLString,
      description: 'Email of user'
    },

  })
})