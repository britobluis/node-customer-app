import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Addresses } from './Addresses';

@Entity()
export class Customers extends BaseEntity {

    @PrimaryGeneratedColumn()
    customer_id!: number;

    @Column()
    name?: string;

    @OneToOne(() => Addresses, { "cascade": true })
    @JoinColumn({ name: "address_id" })
    address!: Addresses;

    @Column()
    address_id!: number;

    @Column()
    phone_number?: string;

    @Column()
    email?: string;

}