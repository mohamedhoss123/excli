const EntitySchema = require("typeorm").EntitySchema

export default new EntitySchema({
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


