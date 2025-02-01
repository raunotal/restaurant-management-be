import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base/base.abstract.repository';
import { Supplier } from 'src/entity/supplier.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SuppliersRepository extends BaseRepository<Supplier> {
  constructor(
    @InjectRepository(Supplier)
    private readonly SupplierRepository: Repository<Supplier>
  ) {
    super(SupplierRepository);
  }
}
