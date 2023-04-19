import { Module } from '@nestjs/common';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { MonsterService } from 'src/monster/monster.service';
import { MonsterModule } from 'src/monster/monster.module';

@Module({
  imports: [PrismaModule, MonsterModule],
  controllers: [RecordController],
  providers: [RecordService, MonsterService, PrismaService],
})
export class RecordModule {}
