import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from 'src/entity/supplier.entity';
import { ISupplierRepository } from 'src/repositories/interfaces/supplier.interface';
import { SupplierRepository } from 'src/repositories/supplier.repository';

@Injectable()
export class SuppliersService {
  private readonly logger: Logger = new Logger(SuppliersService.name);

  constructor(
    @Inject(SupplierRepository)
    private readonly suppliersRepository: ISupplierRepository
  ) {}

  async create(createSupplierDto: CreateSupplierDto) {
    this.logger.log(`Creating supplier ${createSupplierDto.name}`, { createSupplierDto });

    const supplier = new Supplier(createSupplierDto);
    return await this.suppliersRepository.create(supplier);
  }

  async findAll() {
    this.logger.log('Finding all suppliers');

    return this.suppliersRepository.findAll();
  }

  async findOne(id: string) {
    this.logger.log(`Finding supplier ${id}`);

    return this.suppliersRepository.findOneById(id);
  }

  async update(id: string, updateSupplierDto: UpdateSupplierDto) {
    this.logger.log(`Updating supplier ${id}`, { updateSupplierDto });

    return this.suppliersRepository.update(id, updateSupplierDto);
  }

  async remove(id: string) {
    this.logger.log(`Removing supplier ${id}`);

    return this.suppliersRepository.remove(id);
  }
}
