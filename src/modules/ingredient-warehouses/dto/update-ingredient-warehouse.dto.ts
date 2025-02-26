import { IsString, IsOptional } from 'class-validator';

export class UpdateIngredientWarehouseDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
