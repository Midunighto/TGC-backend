import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Ad } from "./Ad";

@ObjectType()
@Entity()
export class Picture extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  url: string;

  @ManyToOne(() => Ad, (ad) => ad.pictures)
  ad: Ad;
}
