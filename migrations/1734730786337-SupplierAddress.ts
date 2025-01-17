import { MigrationInterface, QueryRunner } from 'typeorm';

export class SupplierAddress1734730786337 implements MigrationInterface {
  name = 'SupplierAddress1734730786337';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "suppliers" ADD "address" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "suppliers" DROP COLUMN "address"`);
  }
}
