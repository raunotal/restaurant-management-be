export class CreateUnitDto {
  name: string;
  displayName: string;
  ratio: number;
  parentUnitId: string | null;
}
