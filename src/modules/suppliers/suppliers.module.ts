import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from 'src/entity/supplier.entity';
import { SuppliersRepository } from 'src/repositories/suppliers.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  controllers: [SuppliersController],
  providers: [
    SuppliersService,
    {
      provide: SuppliersRepository.name,
      useClass: SuppliersRepository,
    },
  ],
})
export class SuppliersModule {}
