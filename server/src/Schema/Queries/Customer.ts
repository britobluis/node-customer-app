import { GraphQLList } from 'graphql';
import { CustomerType } from '../TypeDefs/Customer';
import { Customers } from '../../Entities/Customers';
import { getRepository } from "typeorm";

export const GET_ALL_CUSTOMERS = {
    type: new GraphQLList(CustomerType),
    async resolve(parent: any) {

        const customers = await getRepository(Customers)
            .createQueryBuilder("customers")
            .leftJoinAndSelect("customers.address", "addresses")
            .getMany();

        return customers
    }
}