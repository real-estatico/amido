import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseGroupsService } from '../services/purchase-groups.service';
import { CreatePurchaseGroupDto } from '../dto/create-purchase-group.dto';
import { UpdatePurchaseGroupDto } from '../dto/update-purchase-group.dto';

@Controller('purchase-groups')
export class PurchaseGroupsController {
  constructor(private readonly purchaseGroupsService: PurchaseGroupsService) {}

  @Post()
  create(@Body() createPurchaseGroupDto: CreatePurchaseGroupDto) {
    return this.purchaseGroupsService.create(createPurchaseGroupDto);
  }

  @Get()
  findAll() {
    return this.purchaseGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseGroupDto: UpdatePurchaseGroupDto) {
    return this.purchaseGroupsService.update(+id, updatePurchaseGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseGroupsService.remove(+id);
  }
}

