import { BaseEntity, BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    slug: string;

    @Column()
    name: string;

    @Column()
    password: string;



    // @CreateDateColumn({

    //     nullable: false,
    // })
    // createdAt: Date;

    // @UpdateDateColumn({
    //     nullable: false,
    // })
    // updatedAt: Date;

    // @DeleteDateColumn({
    //     nullable: true,
    // })
    // deletedAt: Date;


}