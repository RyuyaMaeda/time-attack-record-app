import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PrismaClient, Monster, Record } from '@prisma/client';
import { Param } from '@nestjs/common';

@Controller('record')
export class RecordController {
  private prisma = new PrismaClient();

  @Get()
  async getAllMonsters(): Promise<Monster[]> {
    return this.prisma.monster.findMany();
  }

  async getMonsterById(@Param('id') id: string): Promise<Monster> {
    return this.prisma.monster.findUnique({
      where: { id: parseInt(id, 10) },
    });
  }

  @Post()
  async create(@Body() data: any) {
    return await this.prisma.record.create({ data });
  }
}
