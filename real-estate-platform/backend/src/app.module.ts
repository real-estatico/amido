import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './modules/projects/projects.module';
import { PurchaseGroupsModule } from './modules/purchase-groups/purchase-groups.module';
import { Project } from './modules/projects/entities/project.entity';
import { PurchaseGroup } from './modules/purchase-groups/entities/purchase-group.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'real-estate.db',
      entities: [Project, PurchaseGroup],
      synchronize: true,
    }),
    ProjectsModule,
    PurchaseGroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

