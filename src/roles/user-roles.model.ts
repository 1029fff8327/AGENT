import { ApiProperty } from "@nestjs/swagger";
import { Model, Column, DataType, Table, BelongsToMany, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";

@Table({tableName: 'user-roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: string;

}
