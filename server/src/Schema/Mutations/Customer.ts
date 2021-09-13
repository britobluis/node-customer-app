import { GraphQLString, GraphQLInt, GraphQLID } from 'graphql';
import { CustomerType } from "../TypeDefs/Customer";
import { Customers } from '../../Entities/Customers';
import { Addresses } from '../../Entities/Addresses';
 
export const CREATE_CUSTOMER = {
    type: CustomerType,
    args: {
        name: { type: GraphQLString },
        address_id: { type: GraphQLInt },
        phone_number: { type: GraphQLString },
        email: { type: GraphQLString }
    },
    async resolve(parent:any, args: any) {
        await Customers.insert( args );
        return args;
    }
}

export const DELETE_CUSTOMER = {
    type: CustomerType,
    args: {
        customer_id: {type: GraphQLID}
    },
    async resolve(parent:any, args: any) {
        const customer_id = args.customer_id;
        const customer = await Customers.findOne(customer_id);
        await Customers.delete(customer_id);
        if (customer) { await Addresses.delete(customer.address_id); }
        return customer_id;
    }
}

export const UPDATE_CUSTOMER = {
    type: CustomerType,
    args: {
        customer_id: { type: GraphQLID },
        name: { type: GraphQLString },
        address_id: { type: GraphQLID },
        phone_number: { type: GraphQLString },
        email: { type: GraphQLString }
    },
    async resolve(parent:any, args:any){
        const { customer_id, name, address_id, phone_number, email } = args;
        const customer = await Customers.findOne(customer_id);
        if(customer) {
            return await Customers.update(
                {customer_id}, 
                { name, address_id, phone_number, email }
            )
        } else {
            throw new Error("Customer does not exist");
        }
    }
}