import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';

@Injectable()
export class JobService {
    constructor(
        @InjectRepository(Job)
        private jobRepo: Repository<Job>,
    ) {}

    create(createJobDto: CreateJobDto) {
        return 'This action adds a new job';
    }

    async findAll() {
        const jobs = await this.jobRepo.find();
        return jobs;
    }

    findOne(id: number) {
        return `This action returns a #${id} job`;
    }

    update(id: number, updateJobDto: UpdateJobDto) {
        return `This action updates a #${id} job`;
    }

    remove(id: number) {
        return `This action removes a #${id} job`;
    }
}
