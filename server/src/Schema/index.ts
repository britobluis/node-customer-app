import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { GET_ALL_CUSTOMERS } from './Queries/Customer';
import { CREATE_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER } from './Mutations/Customer';
import { CREATE_ADDRESS } from './Mutations/Address';

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllCustomers: GET_ALL_CUSTOMERS
    },
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createCustomer: CREATE_CUSTOMER,
        createAddress: CREATE_ADDRESS,
        deleteCustomer: DELETE_CUSTOMER,
        updateCustomer: UPDATE_CUSTOMER,
    },
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})