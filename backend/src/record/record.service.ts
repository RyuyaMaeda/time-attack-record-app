import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, Record } from '@prisma/client';

@Injectable()
export class RecordService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Record[]> {
    return this.prisma.record.findMany();
  }

  async findById(id: number): Promise<Record | null> {
    return this.prisma.record.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.RecordCreateInput): Promise<Record> {
    return this.prisma.record.create({ data });
  }

  async update(id: number, data: Prisma.RecordUpdateInput): Promise<Record> {
    return this.prisma.record.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Record> {
    return this.prisma.record.delete({
      where: { id },
    });
  }
}
