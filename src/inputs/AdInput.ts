import { InputType, Field, ID } from "type-graphql";
import { MinLength } from "class-validator";
import { Category } from "../entities/Category";
import { Picture } from "../entities/Picture";

@InputType()
export class PictureInput {
  @Field()
  url: string;
}

@InputType()
export class AdInput {
  @Field()
  title: string;

  @Field()
  @MinLength(10)
  description: string;

  @Field()
  owner: string;

  @Field()
  price: number;

  @Field()
  location: string;

  @Field(() => ID)
  categoryId: Category["id"];

  @Field(() => [PictureInput], { nullable: true })
  picturesUrls?: Picture[];

  @Field(() => [String], { nullable: true })
  tags: string[];
}
