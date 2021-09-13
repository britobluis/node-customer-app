import {GraphQLObjectType, GraphQLID, GraphQLString} from 'graphql';
import { AddressType } from './Address';
import { Addresses } from '../../Entities/Addresses';

export const CustomerType = new GraphQLObjectType({
    name: "Customer",
    fields: () => ({
        customer_id: { type: GraphQLID },
        name: {type: GraphQLString},
        address: {
            type: AddressType,
            async resolve(parent, args) {
                const address = await Addresses.findOne(parent.address_id)
                return address
            }
        },
        address_id: {type: GraphQLID},
        phone_number: {type: GraphQLString},
        email: {type: GraphQLString}
    })
})