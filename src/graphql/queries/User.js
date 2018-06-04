const GraphQL = require('graphql');
const {
  GraphQLString,
  GraphQLID, 
} = GraphQL; 

const UserType = require('../types/User');
const UserResolver = require('../resolvers/User');

module.exports = {

  index() {
    return {
      type: UserType,
      description: 'This will return all the users with the given ID',
      args: {
        userID: {
          type: GraphQLID,     
          description: 'Please enter a userID',
        }, 
      },
      resolve(parent, args, context, info) {
        return UserResolver.index(args);
      }
    }
  }
}