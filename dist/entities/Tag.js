var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, Entity, } from "typeorm";
import { Ad } from "./Ad";
let Tag = class Tag extends BaseEntity {
    id;
    name;
    ad;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Tag.prototype, "id", void 0);
__decorate([
    Column({ unique: true }),
    __metadata("design:type", String)
], Tag.prototype, "name", void 0);
__decorate([
    ManyToMany(() => Ad, (ad) => ad.tag, { cascade: true, onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Tag.prototype, "ad", void 0);
Tag = __decorate([
    Entity()
], Tag);
export { Tag };
//# sourceMappingURL=Tag.js.map