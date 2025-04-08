import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIngredientProductCodeField1744133807511 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ingredients" ADD "productCode" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "productCode"`);
  }
}
