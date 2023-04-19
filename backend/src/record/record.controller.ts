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
import { RecordService } from './record.service';
import { MonsterService } from '../monster/monster.service';
import { Record } from '@prisma/client';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

@Controller('record')
export class RecordController {
  constructor(
    private readonly recordService: RecordService,
    private readonly monsterService: MonsterService,
  ) {}

  @Get()
  async getAllRecords(): Promise<Record[]> {
    return this.recordService.findAll();
  }

  @Get(':id')
  async getRecordById(@Param('id') id: string): Promise<Record> {
    const record = await this.recordService.findById(parseInt(id, 10));
    if (!record) {
      throw new HttpException(
        'Record with id ${id} not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return record;
  }

  @Post()
  async createRecord(
    @Body() createRecordDto: CreateRecordDto,
  ): Promise<Record> {
    const monster = await this.monsterService.findById(
      createRecordDto.monster_id,
    );
    if (!monster) {
      throw new HttpException(
        'Monster with id ${createRecordDto.monster_id} not found.',
        HttpStatus.NOT_FOUND,
      );
    }
    const record = await this.recordService.create(createRecordDto);
    return record;
  }

  @Put(':id')
  async updateRecord(
    @Param('id') id: string,
    @Body() updateRecordDto: UpdateRecordDto,
  ): Promise<Record> {
    const record = await this.recordService.update(
      parseInt(id, 10),
      updateRecordDto,
    );
    if (!record) {
      throw new HttpException(
        'REcord with id ${id} not found.',
        HttpStatus.NOT_FOUND,
      );
    }
    return record;
  }

  @Delete(':id')
  async deleteRecord(@Param('id') id: string): Promise<void> {
    const result = await this.recordService.delete(parseInt(id, 10));
    if (!result) {
      throw new HttpException(
        'REcord with id ${id} not found',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
