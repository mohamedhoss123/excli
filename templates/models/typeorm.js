let jsTypeorm = `

var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "thisiplaceHolder",
    tableName: "thisiplaceHolder",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
    },
})

`

let tsTypeorm = `
import { Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class thisiplaceHolder {
    @PrimaryGeneratedColumn()
    id: number

}


`