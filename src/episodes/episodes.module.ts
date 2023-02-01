import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { EpisodesController } from './episodes.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [EpisodesController],
  providers: [EpisodesService],
  imports: [PrismaModule],
})
export class EpisodesModule {}
