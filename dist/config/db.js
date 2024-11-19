import { DataSource } from "typeorm";
export const dataSourceGoodCorner = new DataSource({
    database: "the_good_corner.sqlite",
    type: "sqlite",
    entities: ["src/entities/*.ts"],
    synchronize: true,
    logging: ["error", "query"],
});
//# sourceMappingURL=db.js.map