var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Ad } from "../entities/Ad";
import { Query, Arg, Resolver } from "type-graphql";
let AdResolver = class AdResolver {
    async getAllAds() {
        const ads = await Ad.find({
            order: {
                id: "DESC",
            },
        });
        return ads;
    }
    async getAdById(id) {
        const ad = await Ad.findOneByOrFail({ id: id });
        return ad;
    }
    async createNewAd(title, description, owner, price, location, createdAt) {
        const ads = new Ad();
        ads.title = title;
        ads.description = description;
        ads.owner = owner;
        ads.price = price;
        ads.location = location;
        ads.createdAt = createdAt;
        const result = await ads.save();
        return result;
    }
};
__decorate([
    Query(() => [Ad]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdResolver.prototype, "getAllAds", null);
__decorate([
    __param(0, Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdResolver.prototype, "getAdById", null);
__decorate([
    __param(0, Arg("title")),
    __param(1, Arg("description")),
    __param(2, Arg("owner")),
    __param(3, Arg("price")),
    __param(4, Arg("location")),
    __param(5, Arg("createdAt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, String, Date]),
    __metadata("design:returntype", Promise)
], AdResolver.prototype, "createNewAd", null);
AdResolver = __decorate([
    Resolver(Ad)
], AdResolver);
export { AdResolver };
//# sourceMappingURL=AdResolver.js.map