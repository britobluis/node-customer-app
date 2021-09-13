import { GraphQLString, GraphQLInt } from 'graphql';
import { AddressType } from "../TypeDefs/Address";
import { Addresses } from '../../Entities/Addresses';

export const CREATE_ADDRESS = {
    type: AddressType,
    args: {
        street_name: { type: GraphQLString },
        house_number: { type: GraphQLInt },
        city: { type: GraphQLString },
        state: { type: GraphQLString }
    },
    async resolve(parent:any, args: any) {
        await Addresses.insert( args );
        return args;
    }
}