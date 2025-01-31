import { DeepPartial, FindManyOptions } from 'typeorm';

export interface IBaseRepository<T> {
  create(entity: DeepPartial<T>): Promise<T>;
  update(id: string, entity: DeepPartial<T>): Promise<T>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>;
  findOneById(id: string): Promise<T>;
  remove(id: string): Promise<void>;
}
