import { IsOptional, IsString } from 'class-validator';

export class UpdateSupplierDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  contact: string;

  @IsString()
  @IsOptional()
  deliveryTerms: string;
}
