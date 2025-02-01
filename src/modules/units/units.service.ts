import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { UnitsRepository } from 'src/repositories/units.repository';
import { IUnitsRepository } from 'src/repositories/interfaces/units.repository.interface';
import { Unit } from 'src/entity/unit.entity';

@Injectable()
export class UnitsService {
  private readonly logger: Logger = new Logger(UnitsService.name);

  constructor(
    @Inject(UnitsRepository.name)
    private readonly unitsRepository: IUnitsRepository
  ) {}

  async create(createUnitDto: CreateUnitDto) {
    this.logger.log(`Creating unit ${createUnitDto.name}`, { createUnitDto });

    const parentUnit = await this.unitsRepository.findOneById(createUnitDto.parentUnitId);
    const unit = new Unit({ ...createUnitDto, parentUnit });
    return await this.unitsRepository.create(unit);
  }

  async findAll() {
    this.logger.log('Finding all units');

    return await this.unitsRepository.findAll({ relations: ['parentUnit'] });
  }

  async findOne(id: string) {
    this.logger.log(`Finding unit ${id}`);

    return await this.unitsRepository.findOneById(id);
  }

  async update(id: string, updateUnitDto: UpdateUnitDto) {
    this.logger.log(`Updating unit ${id}`, { updateUnitDto });

    return await this.unitsRepository.update(id, updateUnitDto);
  }

  async remove(id: string) {
    this.logger.log(`Removing unit ${id}`);

    await this.unitsRepository.remove(id);
  }
}
