import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('JOBS')
export class Job {
    @PrimaryColumn()
    JOB_ID: number;

    @Column()
    JOB_TITLE: number;
}
