import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Job } from './app/job/entities/job.entity';
import { JobModule } from './app/job/job.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'oracle',
            host: '172.21.138.34',
            port: 49161,
            sid: 'xe',
            username: 'system',
            password: 'oracle',
            schema: 'HR',
            entities: [Job],
            synchronize: false,
            logging: true,
        }),
        JobModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
