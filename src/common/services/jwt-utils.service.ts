import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EntraIdToken } from '../interfaces/entra-token.interface';

@Injectable()
export class JwtUtilsService {
  constructor(private jwtService: JwtService) {}

  decodeToken(token: string): EntraIdToken {
    console.log('token', token);

    return this.jwtService.decode(token);
  }
}
