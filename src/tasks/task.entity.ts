import { Exclude } from "class-transformer";
import { User } from "src/auth/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm"
import { TaskStatus } from "./tasks.status.enum";

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    status: TaskStatus;
    @ManyToOne((_type) => User, (user) => user.tasks, { eager: false })
    @Exclude({toPlainOnly: true})
    user: User;
}

