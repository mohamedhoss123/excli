import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class thisiplaceHolder extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

}