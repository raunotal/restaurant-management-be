import { CreateIngredientProductGroupDto } from './create-ingredient-product-group.dto';
import { IsString } from 'class-validator';

export class UpdateIngredientProductGroupDto extends CreateIngredientProductGroupDto {
  @IsString()
  id: string;
}
