import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveIngredientWarehouseMinQuantityDescription1744227365042 implements MigrationInterface {
    name = 'RemoveIngredientWarehouseMinQuantityDescription1744227365042'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "warehouseMinQuantityDescription"`);
        await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "warehouseMinQuantity"`);
        await queryRunner.query(`ALTER TABLE "ingredients" ADD "warehouseMinQuantity" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "warehouseMinQuantity"`);
        await queryRunner.query(`ALTER TABLE "ingredients" ADD "warehouseMinQuantity" double precision`);
        await queryRunner.query(`ALTER TABLE "ingredients" ADD "warehouseMinQuantityDescription" character varying`);
    }

}
