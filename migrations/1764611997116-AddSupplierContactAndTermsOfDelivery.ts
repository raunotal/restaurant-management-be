import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSupplierContactAndTermsOfDelivery1764611997116 implements MigrationInterface {
    name = 'AddSupplierContactAndTermsOfDelivery1764611997116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "suppliers" ADD "contact" character varying`);
        await queryRunner.query(`ALTER TABLE "suppliers" ADD "deliveryTerms" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "suppliers" DROP COLUMN "deliveryTerms"`);
        await queryRunner.query(`ALTER TABLE "suppliers" DROP COLUMN "contact"`);
    }

}
