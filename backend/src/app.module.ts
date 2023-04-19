import { Module } from '@nestjs/common';
import { MonsterModule } from './monster/monster.module';
import { RecordModule } from './record/record.module';

@Module({
  imports: [RecordModule, MonsterModule],
})
export class AppModule {}
