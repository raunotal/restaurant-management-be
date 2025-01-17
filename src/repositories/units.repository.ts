import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base/base.abstract.repository';
import { Unit } from 'src/entity/unit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UnitsRepository extends BaseRepository<Unit> {
  constructor(
    @InjectRepository(Unit)
    private readonly UnitRepository: Repository<Unit>
  ) {
    super(UnitRepository);
  }
}
