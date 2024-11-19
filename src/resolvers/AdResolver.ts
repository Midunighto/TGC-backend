import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Ad } from "../entities/Ad";
import { AdInput } from "../inputs/AdInput";
import UpdateAdInput from "../inputs/UpdateAdInput";
import { Category } from "../entities/Category";

@Resolver(Ad)
class AdResolver {
  @Query(() => [Ad])
  async getAllAds() {
    const ads = await Ad.find({
      relations: ["tags"],
      order: {
        id: "DESC",
      },
    });
    return ads;
  }

  @Query(() => Ad)
  async getAdById(@Arg("id") id: number) {
    const ad = await Ad.findOne({ where: { id }, relations: ["tags"] });
    return ad;
  }

  @Mutation(() => Ad)
  async createNewAd(@Arg("data") newAdData: AdInput) {
    const category = await Category.findOneByOrFail({
      id: newAdData.categoryId,
    });

    const newAdToSave = Ad.create({
      ...newAdData,
      pictures: newAdData.picturesUrls,
      createdAt: new Date(),
      category,
      tags: newAdData.tags.map((tagId) => ({ id: parseInt(tagId) })),
    });
    const result = await newAdToSave.save();
    return result;
  }

  @Mutation(() => String)
  async deleteAd(@Arg("id") id: number) {
    const result = await Ad.delete(id);
    if (result.affected === 1) {
      return "Ad has been deleted";
    } else {
      throw new Error("Ad has not been found");
    }
  }

  @Mutation(() => Ad)
  async updateAdById(
    @Arg("id") id: number,
    @Arg("data") data: UpdateAdInput
  ): Promise<Ad> {
    const ad = await Ad.findOneByOrFail({ id: id });
    Object.assign(ad, data);
    await ad.save();
    return ad;
  }
}

export { AdResolver };
