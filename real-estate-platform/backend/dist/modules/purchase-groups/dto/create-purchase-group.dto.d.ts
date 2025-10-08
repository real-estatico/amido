export declare class CreatePurchaseGroupDto {
    name: string;
    description: string;
    organizerName: string;
    organizerEmail: string;
    organizerPhone: string;
    targetAmount: number;
    currentAmount: number;
    status: string;
    deadline: Date;
    imageUrl?: string;
    benefits?: string[];
    discountPercentage?: number;
    projectId: number;
}
