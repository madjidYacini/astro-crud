import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "astro",
})
export class Astro extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstname!: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastname!: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    age!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    gender!: string;



}