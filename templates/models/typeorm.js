import { DataSource } from "typeorm";

export default new EntitySchema({
    name: "thisiplaceHolderEntity",
    tableName: "thisiplaceHolder",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
    },
})


