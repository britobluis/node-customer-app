import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from 'graphql';

export const AddressType = new GraphQLObjectType({
    name: "Address",
    fields: () => ({
        address_id: {type: GraphQLID},
        street_name: { type: GraphQLString },
        house_number: { type: GraphQLInt },
        city: { type: GraphQLString },
        state: { type: GraphQLString }
    })
})