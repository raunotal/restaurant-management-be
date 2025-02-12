import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtUtilsService } from '../services/jwt-utils.service';
import { RequestContextService } from '../services/request-context.service';

@Global()
@Module({
  imports: [JwtModule.register({})],
  providers: [RequestContextService, JwtUtilsService],
  exports: [RequestContextService, JwtUtilsService, JwtModule],
})
export class CommonModule {}
