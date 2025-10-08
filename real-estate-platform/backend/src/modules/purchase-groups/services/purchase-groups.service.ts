import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseGroup } from '../entities/purchase-group.entity';
import { CreatePurchaseGroupDto } from '../dto/create-purchase-group.dto';
import { UpdatePurchaseGroupDto } from '../dto/update-purchase-group.dto';

@Injectable()
export class PurchaseGroupsService {
  constructor(
    @InjectRepository(PurchaseGroup)
    private purchaseGroupsRepository: Repository<PurchaseGroup>,
  ) {}

  async create(createPurchaseGroupDto: CreatePurchaseGroupDto): Promise<PurchaseGroup> {
    const purchaseGroup = this.purchaseGroupsRepository.create(createPurchaseGroupDto);
    return this.purchaseGroupsRepository.save(purchaseGroup);
  }

  async findAll(): Promise<PurchaseGroup[]> {
    return this.purchaseGroupsRepository.find({
      relations: ['project'],
    });
  }

  async findOne(id: number): Promise<PurchaseGroup> {
    return this.purchaseGroupsRepository.findOne({
      where: { id },
      relations: ['project'],
    });
  }

  async update(id: number, updatePurchaseGroupDto: UpdatePurchaseGroupDto): Promise<PurchaseGroup> {
    await this.purchaseGroupsRepository.update(id, updatePurchaseGroupDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.purchaseGroupsRepository.delete(id);
  }
}

