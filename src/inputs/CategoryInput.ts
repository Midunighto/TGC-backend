import { Field, InputType, ID } from "type-graphql";
import { Category } from "src/entities/Category";

@InputType()
export default class CategoryInput implements Partial<Category> {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
