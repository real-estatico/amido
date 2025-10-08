import { PurchaseGroup } from '../../purchase-groups/entities/purchase-group.entity';
export declare class Project {
    id: number;
    name: string;
    description: string;
    location: string;
    totalInvestment: number;
    minimumInvestment: number;
    status: string;
    startDate: Date;
    endDate: Date;
    imageUrl: string;
    features: string[];
    expectedReturn: number;
    purchaseGroups: PurchaseGroup[];
    createdAt: Date;
    updatedAt: Date;
}
