import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsController } from './units.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitsRepository } from 'src/repositories/units.repository';
import { Unit } from 'src/entity/unit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Unit])],
  controllers: [UnitsController],
  providers: [
    UnitsService,
    {
      provide: UnitsRepository.name,
      useClass: UnitsRepository,
    },
  ],
})
export class UnitsModule {}
