import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from 'src/entity/supplier.entity';
import { ISuppliersRepository } from 'src/repositories/interfaces/suppliers.repository';
import { SuppliersRepository } from 'src/repositories/suppliers.repository';

@Injectable()
export class SuppliersService {
  private readonly logger: Logger = new Logger(SuppliersService.name);

  constructor(
    @Inject(SuppliersRepository.name)
    private readonly suppliersRepository: ISuppliersRepository
  ) {}

  async create(createSupplierDto: CreateSupplierDto) {
    this.logger.log(`Creating supplier ${createSupplierDto.name}`, { createSupplierDto });

    const supplier = new Supplier(createSupplierDto);
    return await this.suppliersRepository.create(supplier);
  }

  findAll() {
    this.logger.log('Finding all suppliers');

    return this.suppliersRepository.findAll();
  }

  findOne(id: string) {
    this.logger.log(`Finding supplier ${id}`);

    return this.suppliersRepository.findOneById(id);
  }

  update(id: string, updateSupplierDto: UpdateSupplierDto) {
    this.logger.log(`Updating supplier ${id}`, { updateSupplierDto });

    return this.suppliersRepository.update(id, updateSupplierDto);
  }

  remove(id: string) {
    this.logger.log(`Removing supplier ${id}`);

    return this.suppliersRepository.remove(id);
  }
}
