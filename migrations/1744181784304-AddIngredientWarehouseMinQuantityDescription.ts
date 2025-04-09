import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIngredientWarehouseMinQuantityDescription1744181784304 implements MigrationInterface {
    name = 'AddIngredientWarehouseMinQuantityDescription1744181784304'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients" ADD "warehouseMinQuantityDescription" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "warehouseMinQuantityDescription"`);
    }

}
