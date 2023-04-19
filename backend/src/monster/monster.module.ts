import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { MonsterController } from './monster.controller';
import { MonsterService } from './monster.service';

@Module({
  imports: [PrismaModule],
  controllers: [MonsterController],
  providers: [MonsterService, PrismaService],
})
export class MonsterModule {}
