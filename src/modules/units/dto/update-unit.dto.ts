import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUnitDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  displayName: string;

  @IsNumber({ maxDecimalPlaces: 6 })
  @IsOptional()
  ratio: number;

  @IsString()
  @IsOptional()
  parentUnitId: string;
}
