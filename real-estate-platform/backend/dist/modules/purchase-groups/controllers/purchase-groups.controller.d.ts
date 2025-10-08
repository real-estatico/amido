import { PurchaseGroupsService } from '../services/purchase-groups.service';
import { CreatePurchaseGroupDto } from '../dto/create-purchase-group.dto';
import { UpdatePurchaseGroupDto } from '../dto/update-purchase-group.dto';
export declare class PurchaseGroupsController {
    private readonly purchaseGroupsService;
    constructor(purchaseGroupsService: PurchaseGroupsService);
    create(createPurchaseGroupDto: CreatePurchaseGroupDto): Promise<import("../entities/purchase-group.entity").PurchaseGroup>;
    findAll(): Promise<import("../entities/purchase-group.entity").PurchaseGroup[]>;
    findOne(id: string): Promise<import("../entities/purchase-group.entity").PurchaseGroup>;
    update(id: string, updatePurchaseGroupDto: UpdatePurchaseGroupDto): Promise<import("../entities/purchase-group.entity").PurchaseGroup>;
    remove(id: string): Promise<void>;
}
