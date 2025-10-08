export class CreateProjectDto {
  name: string;
  description: string;
  location: string;
  totalInvestment: number;
  minimumInvestment: number;
  status: string;
  startDate: Date;
  endDate?: Date;
  imageUrl?: string;
  features?: string[];
  expectedReturn?: number;
}

