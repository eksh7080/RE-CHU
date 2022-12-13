import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { Board } from "./board.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    created: Date;

    @ManyToOne((type) => User, (user) => user.ownComments, { nullable: false })
    fromUser: User[];

    @ManyToOne((type) => Board, (board) => board.id, { nullable: false })
    fromBoard: Board[];
}