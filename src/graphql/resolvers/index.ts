import userResolvers from './user';
import merge from 'lodash.merge';

const resolvers = merge({}, userResolvers);

export default resolvers;

// now will install lodash merge package for merging all the resolvers of query, mutation and subscriptions
