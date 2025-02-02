import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsController } from './units.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitRepository } from 'src/repositories/unit.repository';
import { Unit } from 'src/entity/unit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Unit])],
  controllers: [UnitsController],
  providers: [UnitsService, UnitRepository],
})
export class UnitsModule {}
