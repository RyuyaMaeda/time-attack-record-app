import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, Monster } from '@prisma/client';

@Injectable()
export class MonsterService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Monster[]> {
    return this.prisma.monster.findMany();
  }

  async findById(id: number): Promise<Monster | null> {
    return this.prisma.monster.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.MonsterCreateInput): Promise<Monster> {
    return this.prisma.monster.create({ data });
  }

  async update(id: number, data: Prisma.MonsterUpdateInput): Promise<Monster> {
    return this.prisma.monster.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Monster> {
    return this.prisma.monster.delete({
      where: { id },
    });
  }
}
