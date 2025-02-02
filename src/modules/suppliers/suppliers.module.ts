import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from 'src/entity/supplier.entity';
import { SupplierRepository } from 'src/repositories/supplier.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  controllers: [SuppliersController],
  providers: [SuppliersService, SupplierRepository],
})
export class SuppliersModule {}
