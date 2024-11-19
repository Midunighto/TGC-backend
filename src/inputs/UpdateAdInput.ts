import { Field, InputType, ID } from "type-graphql";
import { Ad } from "../entities/Ad";
import { Category } from "../entities/Category";

@InputType()
export default class UpdateAdInput implements Partial<Ad> {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  owner?: string;

  @Field({ nullable: true })
  price?: number;

  @Field(() => [String], { nullable: true })
  picturesUrls?: string[];

  @Field({ nullable: true })
  location?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field(() => ID, { nullable: true })
  category?: Category;
}
