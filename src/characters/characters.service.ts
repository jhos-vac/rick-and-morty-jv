import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}
  
  create(createCharacterDto: CreateCharacterDto) {
    return this.prisma.character.create({data:createCharacterDto});
  }

  async findAll() {
    type Characters = {
      name: string;
    };

    const character: Characters[] = await this.prisma.character.findMany();
    const list = [];
    for (let i = 0; i < character.length; i++) {
      let names
      names.short(character)
     list.push(names)
    }

    return list;


  }

  findOne(id: number) {
    return this.prisma.character.findUnique({where:{id}});
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return this.prisma.character.update({
      where: { id },
      data: updateCharacterDto,
    });
  }

  remove(id: number) {
    return this.prisma.character.delete({ where: { id } });
  }
}
