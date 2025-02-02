import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { UnitRepository } from 'src/repositories/unit.repository';
import { IUnitRepository } from 'src/repositories/interfaces/unit.interface';
import { Unit } from 'src/entity/unit.entity';

@Injectable()
export class UnitsService {
  private readonly logger: Logger = new Logger(UnitsService.name);

  constructor(
    @Inject(UnitRepository)
    private readonly unitRepository: IUnitRepository
  ) {}

  async create(createUnitDto: CreateUnitDto) {
    this.logger.log(`Creating unit ${createUnitDto.name}`, { createUnitDto });

    const parentUnit = await this.unitRepository.findOneById(createUnitDto.parentUnitId);
    const unit = new Unit({ ...createUnitDto, parentUnit });
    return await this.unitRepository.create(unit);
  }

  async findAll() {
    this.logger.log('Finding all units');

    return await this.unitRepository.findAll({ relations: ['parentUnit'] });
  }

  async findOne(id: string) {
    this.logger.log(`Finding unit ${id}`);

    return await this.unitRepository.findOneById(id);
  }

  async update(id: string, updateUnitDto: UpdateUnitDto) {
    this.logger.log(`Updating unit ${id}`, { updateUnitDto });

    const parentUnit = await this.unitRepository.findOneById(updateUnitDto.parentUnitId);
    const unit = new Unit({ ...updateUnitDto, parentUnit });
    return await this.unitRepository.update(id, unit);
  }

  async remove(id: string) {
    this.logger.log(`Removing unit ${id}`);

    await this.unitRepository.remove(id);
  }
}
