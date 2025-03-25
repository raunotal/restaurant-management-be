import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIngredientBulkPackageField1742914637734 implements MigrationInterface {
    name = 'AddIngredientBulkPackageField1742914637734'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients" ADD "bulkPackage" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "bulkPackage"`);
    }

}
