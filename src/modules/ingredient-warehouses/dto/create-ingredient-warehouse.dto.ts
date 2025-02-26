import { IsOptional, IsString } from 'class-validator';

export class CreateIngredientWarehouseDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}
