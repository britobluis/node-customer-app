import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Addresses extends BaseEntity {

    @PrimaryGeneratedColumn()
    address_id!: number;

    @Column()
    street_name?: string;

    @Column()
    house_number?: number;

    @Column()
    city?: string;

    @Column()
    state?: string;

}