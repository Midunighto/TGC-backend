import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  Entity,
} from "typeorm";
import { Ad } from "./Ad";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Tag extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field(() => [Ad])
  @ManyToMany(() => Ad, (ad) => ad.tags, { cascade: true, onDelete: "CASCADE" })
  ads: Ad[];
}
