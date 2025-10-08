import { Repository } from 'typeorm';
import { PurchaseGroup } from '../entities/purchase-group.entity';
import { CreatePurchaseGroupDto } from '../dto/create-purchase-group.dto';
import { UpdatePurchaseGroupDto } from '../dto/update-purchase-group.dto';
export declare class PurchaseGroupsService {
    private purchaseGroupsRepository;
    constructor(purchaseGroupsRepository: Repository<PurchaseGroup>);
    create(createPurchaseGroupDto: CreatePurchaseGroupDto): Promise<PurchaseGroup>;
    findAll(): Promise<PurchaseGroup[]>;
    findOne(id: number): Promise<PurchaseGroup>;
    update(id: number, updatePurchaseGroupDto: UpdatePurchaseGroupDto): Promise<PurchaseGroup>;
    remove(id: number): Promise<void>;
}
