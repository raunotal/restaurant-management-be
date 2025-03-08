import { MigrationInterface, QueryRunner } from "typeorm";

export class IngredientMinWarehouseQuantity1741461807581 implements MigrationInterface {
    name = 'IngredientMinWarehouseQuantity1741461807581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients" ADD "warehouseMinQuantity" double precision`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "warehouseMinQuantity"`);
    }

}
