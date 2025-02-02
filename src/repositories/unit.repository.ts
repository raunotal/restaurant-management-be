import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base/base.abstract.repository';
import { Unit } from 'src/entity/unit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UnitRepository extends BaseRepository<Unit> {
  constructor(
    @InjectRepository(Unit)
    private readonly unitRepository: Repository<Unit>
  ) {
    super(unitRepository);
  }
}
