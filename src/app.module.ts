import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Job } from './app/job/entities/job.entity';
import { JobModule } from './app/job/job.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            ignoreEnvFile: process.env.NODE_ENV === 'production',
        }),
        TypeOrmModule.forRoot({
            type: 'oracle',
            host: process.env.ORACLE_HOST,
            port: parseInt(process.env.ORACLE_PORT),
            sid: process.env.ORACLE_SID,
            schema: process.env.ORACLE_SCHEMA,
            username: process.env.ORACLE_USER,
            password: process.env.ORACLE_PASSWORD,
            /*connectString:
                '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=172.21.138.34)(PORT=49161))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=XE)))',*/
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
