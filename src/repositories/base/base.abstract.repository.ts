import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { IBaseRepository } from './base.interface.repository';
import { JwtUtilsService } from 'src/common/services/jwt-utils.service';
import { RequestContextService } from 'src/common/services/request-context.service';
import { Inject } from '@nestjs/common';

interface HasId {
  id: string;
  createdBy?: string;
  updatedBy?: string;
}

export abstract class BaseRepository<T extends HasId> implements IBaseRepository<T> {
  @Inject(RequestContextService)
  private readonly requestContextService: RequestContextService;

  @Inject(JwtUtilsService)
  private readonly jwtUtilsService: JwtUtilsService;

  constructor(private readonly repository: Repository<T>) {}

  private getNameFromToken(): string {
    const token = this.requestContextService.getToken();

    if (!token) return 'system';

    const decodedToken = this.jwtUtilsService.decodeToken(token);
    return decodedToken.name || 'system';
  }

  async create(entity: DeepPartial<T>): Promise<T> {
    const name = this.getNameFromToken();
    entity.createdBy = name;
    entity.updatedBy = name;
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
    entity.updatedBy = this.getNameFromToken();
    return await this.repository.save(entity);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
