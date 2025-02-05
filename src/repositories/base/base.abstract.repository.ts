import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { IBaseRepository } from './base.interface.repository';

interface HasId {
  id: string;
}

export abstract class BaseRepository<T extends HasId> implements IBaseRepository<T> {
  constructor(private readonly repository: Repository<T>) {}

  async create(entity: DeepPartial<T>): Promise<T> {
    return this.repository.save(entity);
  }

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  async findOne(options: FindOneOptions<T>): Promise<T> {
    return this.repository.findOne(options);
  }

  async findOneById(id: string): Promise<T> {
    const options = { id } as FindOptionsWhere<T>;
    return this.repository.findOneBy(options);
  }

  async update(id: string, entity: DeepPartial<T>): Promise<T> {
    const item = await this.findOneById(id);
    if (!item) {
      throw new Error('Item not found');
    }
    return await this.repository.save(entity);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
