import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EpisodesModule } from './episodes/episodes.module';
import { CharactersModule } from './characters/characters.module';

@Module({
  imports: [PrismaModule, EpisodesModule, CharactersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
