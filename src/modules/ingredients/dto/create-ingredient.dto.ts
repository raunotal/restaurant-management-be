import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  name: string;

  @IsNumber({ maxDecimalPlaces: 6 })
  @IsOptional()
  grossQuantity: number;

  @IsNumber({ maxDecimalPlaces: 6 })
  @IsOptional()
  netQuantity: number;

  @IsNumber({ maxDecimalPlaces: 6 })
  @IsOptional()
  purchasePrice: number;

  @IsNumber({ maxDecimalPlaces: 6 })
  @IsOptional()
  warehouseMinQuantity: number;

  @IsString()
  categoryId: string;

  @IsString()
  @IsOptional()
  supplierId: string;

  @IsString()
  @IsOptional()
  warehouseId: string;

  @IsString()
  @IsOptional()
  imageUrl: string;

  @IsString()
  @IsOptional()
  comments: string;

  @IsString()
  unitId: string;

  @IsBoolean()
  isActive: boolean;
}
