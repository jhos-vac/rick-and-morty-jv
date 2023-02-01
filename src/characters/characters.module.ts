import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService],
  imports: [PrismaModule],
})
export class CharactersModule {}
