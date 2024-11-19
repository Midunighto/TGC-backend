import { Field, InputType, ID } from "type-graphql";

@InputType()
export default class TagsInput {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
