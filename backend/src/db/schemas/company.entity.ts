import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Skill } from "./skill.entity";

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  created: Date;

  @Column()
  name: string;

  @OneToMany((type) => Skill, (skill) => skill.name, { nullable: true })
  stacks: Skill[];
}