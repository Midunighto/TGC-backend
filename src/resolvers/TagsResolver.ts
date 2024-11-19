import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Tag } from "../entities/Tag";
import TagsInput from "../inputs/TagsInput";

@Resolver(Tag)
export class TagsResolver {
  @Query(() => [Tag])
  async getAllTags() {
    const tags = await Tag.find({
      order: {
        name: "DESC",
      },
    });
    return tags;
  }

  @Query(() => Tag)
  async getTagById(@Arg("id") id: number) {
    const tag = await Tag.findOneByOrFail({ id: id });
    return tag;
  }

  @Mutation(() => Tag)
  async createTag(@Arg("data") newTagData: TagsInput) {
    const tag = new Tag();
    tag.name = newTagData.name;
    const result = await tag.save();
    return result;
  }

  @Mutation(() => String)
  async updateTag(@Arg("data") updatedData: TagsInput) {
    let tagToUpdate = await Tag.findOneByOrFail({
      id: updatedData.id,
    });
    tagToUpdate = Object.assign(tagToUpdate, updatedData);
    await tagToUpdate.save();
    return "Tag has been updated";
  }

  @Mutation(() => String)
  async deleteTag(@Arg("id") id: number) {
    const result = await Tag.delete(id);
    if (result.affected === 1) {
      return "Tag has been deleted";
    } else {
      throw new Error("Tag has not been found");
    }
  }
}
