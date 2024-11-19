import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Entity,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Ad } from "./Ad";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  name: string;

  @OneToMany(() => Ad, (ad) => ad.category)
  ads: Ad[];
}
