import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RecordService } from '../record/record.service';
import { MonsterService } from './monster.service';
import { Monster } from '@prisma/client';
import { CreateMonsterDto } from './dto/create-monster.dto';
import { UpdateMonsterDto } from './dto/update-monster.dto';

@Controller('monster')
export class MonsterController {
  constructor(
    private readonly recordService: RecordService,
    private readonly monsterService: MonsterService,
  ) {}

  @Get()
  async getAllMonsters(): Promise<Monster[]> {
    return this.monsterService.findAll();
  }

  @Get(':id')
  async getMonsterById(@Param('id') id: string): Promise<Monster> {
    const monster = await this.monsterService.findById(parseInt(id, 10));
    if (!monster) {
      throw new HttpException(
        'Monster with id ${id} not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return monster;
  }

  @Post()
  async createMonster(
    @Body() createMonsterDto: CreateMonsterDto,
  ): Promise<Monster> {
    const monster = await this.monsterService.create(createMonsterDto);
    return monster;
  }

  @Put(':id')
  async updateMonster(
    @Param('id') id: string,
    @Body() updateMonsterDto: UpdateMonsterDto,
  ): Promise<Monster> {
    const monster = await this.monsterService.update(
      parseInt(id, 10),
      updateMonsterDto,
    );
    if (!monster) {
      throw new HttpException(
        'REcord with id ${id} not found.',
        HttpStatus.NOT_FOUND,
      );
    }
    return monster;
  }

  @Delete(':id')
  async deleteMonster(@Param('id') id: string): Promise<void> {
    const result = await this.monsterService.delete(parseInt(id, 10));
    if (!result) {
      throw new HttpException(
        'REcord with id ${id} not found',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
