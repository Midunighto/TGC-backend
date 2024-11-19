var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MinLength } from "class-validator";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany, } from "typeorm";
import { Category } from "./Category";
import { Tag } from "./Tag";
import { Field, ObjectType } from "type-graphql";
let Ad = class Ad extends BaseEntity {
    id;
    title;
    description;
    owner;
    price = 0;
    picture = "";
    location = "";
    createdAt = new Date();
    category = new Category();
    tag = [];
};
__decorate([
    Field(),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Ad.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Ad.prototype, "title", void 0);
__decorate([
    Field(),
    Column(),
    MinLength(10),
    __metadata("design:type", String)
], Ad.prototype, "description", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Ad.prototype, "owner", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", Number)
], Ad.prototype, "price", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Ad.prototype, "picture", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Ad.prototype, "location", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", Date)
], Ad.prototype, "createdAt", void 0);
__decorate([
    ManyToOne(() => Category, (category) => category.ads, { eager: true }),
    __metadata("design:type", Category)
], Ad.prototype, "category", void 0);
__decorate([
    ManyToMany(() => Tag, (tag) => tag.ad),
    JoinTable(),
    __metadata("design:type", Array)
], Ad.prototype, "tag", void 0);
Ad = __decorate([
    ObjectType(),
    Entity()
], Ad);
export { Ad };
//# sourceMappingURL=Ad.js.map