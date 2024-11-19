import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Category } from "../entities/Category";
import CategoryInput from "../inputs/CategoryInput";

@Resolver(Category)
class CategoryResolver {
  @Query(() => [Category])
  async getAllCategories() {
    const categories = await Category.find({
      order: {
        id: "DESC",
      },
    });
    return categories;
  }

  @Query(() => Category)
  async getCatById(@Arg("id") id: number) {
    const cat = await Category.findOneByOrFail({ id: id });
    return cat;
  }

  @Mutation(() => Category)
  async createCategory(@Arg("data") newCategoryData: CategoryInput) {
    const category = new Category();
    category.name = newCategoryData.name;
    const result = await category.save();
    return result;
  }

  @Mutation(() => String)
  async updateCategory(@Arg("data") updatedData: CategoryInput) {
    let categoryToUpdate = await Category.findOneByOrFail({
      id: updatedData.id,
    });
    categoryToUpdate = Object.assign(categoryToUpdate, updatedData);
    await categoryToUpdate.save();
    return "Category has been updated";
  }

  @Mutation(() => String)
  async deleteCategory(@Arg("id") id: number) {
    const result = await Category.delete(id);
    if (result.affected === 1) {
      return "Category has been deleted";
    } else {
      throw new Error("Category has not been found");
    }
  }
}

export { CategoryResolver };
