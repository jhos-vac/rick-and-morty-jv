import { Injectable } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EpisodesService {
  constructor(private prisma: PrismaService) {}

  create(createEpisodeDto: CreateEpisodeDto) {
    return this.prisma.episode.create({ data: createEpisodeDto });
  }

  async findAll() {
    type Episode = {
      name: string;
      episode: number;
    };

    const episodes: Episode[] = await this.prisma.episode.findMany();
    const list = [];
    for (let i = 0; i < episodes.length; i++) {
      if (episodes[i].episode%2!=0) {
        
        list.push(episodes[i]);
      }
    }

    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} episode`;
  }

  update(id: number, updateEpisodeDto: UpdateEpisodeDto) {
    return this.prisma.episode.update({
      where: { id },
      data: updateEpisodeDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} episode`;
  }
}
