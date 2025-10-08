import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseGroupsService } from './services/purchase-groups.service';
import { PurchaseGroupsController } from './controllers/purchase-groups.controller';
import { PurchaseGroup } from './entities/purchase-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseGroup])],
  controllers: [PurchaseGroupsController],
  providers: [PurchaseGroupsService],
  exports: [PurchaseGroupsService],
})
export class PurchaseGroupsModule {}

